import React from "react";
import s from "./AddMessageForm.module.scss"
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

let maxLength = maxLengthCreator(30)
export function AddMessageForm(props: any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newMessageBody"
                   component={Textarea}
                   validate={[required, maxLength]}
                   placeholder="Enter your message"/>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm({form: 'messageAddForm'})(AddMessageForm)