import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import s from "../Login/LoginForm.module.scss";
import {ProfileType} from "../../Redux/profile-reducer";


type PropsType = {
    profile: ProfileType
}
export const ProfileDataForm:React.FC<InjectedFormProps<ProfileType,PropsType> & PropsType>
    =({handleSubmit, profile, error}) =>{
    return(
        <form onSubmit={handleSubmit}>
        <button>save</button>
            { error && <div className={s.formSummaryError}>
                <span>{error}</span>
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
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                <b>{key}: {createField(key,"contacts." + key ,[], Input)}</b>
            </div>
        })}
            </div>
            </form>
            )}

export const ProfileDataReduxForm = reduxForm<ProfileType,PropsType>({form: 'edit-profile'})(ProfileDataForm)
