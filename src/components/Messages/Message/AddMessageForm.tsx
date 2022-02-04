import React from "react";
import s from "./AddMessageForm.module.scss"
import {Field, reduxForm} from "redux-form";


export function AddMessageForm(props: any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newMessageBody"
                   component="input"
                   type="text"
                   placeholder="Enter your message"/>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm({form: 'messageAddForm'})(AddMessageForm)