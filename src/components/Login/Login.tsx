import React from "react";
import s from "./Login.module.scss"
import {LoginReduxForm} from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {initialAuthStateType, login} from "../../Redux/auth-reducer";
import {RootStateType} from "../../Redux/store";
import {Navigate} from "react-router-dom";

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
export type LoginFormOwnProps = {
    captchaUrl: string | null
}
export function Login(){
    const auth = useSelector<RootStateType, initialAuthStateType>(state => state.auth)
    const dispatch = useDispatch()
    const onSubmit = (formData:LoginFormValuesType)=>{
      dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (auth.isAuth){
        return <Navigate to={"/profile"}/>
    }
    return(
        <div className={s.login}>
         <h1>LOGIN</h1>
           <LoginReduxForm onSubmit = {onSubmit} captchaUrl = {auth.captchaUrl}/>
        </div>
    )
}