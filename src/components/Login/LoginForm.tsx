import React from "react";
import s from "./LoginForm.module.scss"
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

export function LoginForm(props:any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" component={Input}  validate={[required]}  type="text"/>

            </div>
            <div>
                <Field name="Password" component={Input} validate={[required]}  type="text"/>
            </div>
            <div>
                <Field name="rememberMe" component={Input}  type="checkbox"/> Remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
