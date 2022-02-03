import React from "react";
import s from "./LoginForm.module.scss"
import {Field, reduxForm} from "redux-form";

export function LoginForm(props:any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" component="input" type="text"/>

            </div>
            <div>
                <Field name="Password" component="input" type="text"/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/> Remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
