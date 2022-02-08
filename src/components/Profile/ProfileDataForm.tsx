import React from "react";
import { reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import s from "../Login/LoginForm.module.scss";



export function ProfileDataForm(props:any){
    return(
        <form onSubmit={props.handleSubmit}>
        <button>save</button>
            { props.error && <div className={s.formSummaryError}>
                <span>{props.error}</span>
            </div>}
        <div>
            <b>Full name</b>: {createField("Full name","fullName", [required], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField("Full name","lookingForAJob", [required], Input, {type:"checkbox"},"remember me" )}
        </div>
        <div>
            <b>My Professional skills</b>: {createField("My Professional skills","lookingForAJobDescription", [required], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <div key={key}>
                <b>{key}: {createField(key,"contacts." + key ,[], Input)}</b>
            </div>
        })}
            </div>
            </form>
            )}

export const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
