import React from "react";
import s from "./LoginForm.module.scss"
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

export function LoginForm(props:any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"} component={Input}  validate={[required]}  placeholder={"Login"}/>

            </div>
            <div>
                <Field name={"password"} component={Input} validate={[required]}  placeholder={"Password"} type={"password"}/>
            </div>
            <div>
                <Field name={"rememberMe"} component={Input}  type={"checkbox"}/> Remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
