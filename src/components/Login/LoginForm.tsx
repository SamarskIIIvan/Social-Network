import React from "react";
import s from "./LoginForm.module.scss"
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {LoginFormOwnProps, LoginFormValuesType} from "./Login";

export const LoginForm:React.FC<InjectedFormProps<LoginFormValuesType,LoginFormOwnProps> & LoginFormOwnProps>
    = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Login","email", [required], Input)}
            {createField("Password","password", [required], Input, {type:"password"} )}
            {createField(undefined,"rememberMe", [required], Input, {type:"checkbox"},"remember me" )}

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField("Symbols from image ","captcha", [required], Input)}

            { error && <div className={s.formSummaryError}>
             <span>{error}</span>
            </div>}
            <div className={s.loginBtn}>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)
