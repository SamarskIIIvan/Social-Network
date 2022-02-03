import React from "react";
import s from "./Login.module.scss"
import {LoginReduxForm} from "./LoginForm";


export function Login(props: any){
    const onSubmit = (formData:any)=>{
        console.log(formData)
    }
    return(
        <div className={s.login}>
         <h1>LOGIN</h1>
           <LoginReduxForm onSubmit = {onSubmit}/>
        </div>
    )
}