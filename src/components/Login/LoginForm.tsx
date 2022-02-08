import React from "react";
import s from "./LoginForm.module.scss"
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

export function LoginForm(props:any) {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField("Login","email", [required], Input)}
            {createField("Password","password", [required], Input, {type:"password"} )}
            {createField(undefined,"rememberMe", [required], Input, {type:"checkbox"},"remember me" )}
            { props.error && <div className={s.formSummaryError}>
             <span>{props.error}</span>
            </div>}
            <div className={s.loginBtn}>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
