import React from "react";
import s from "./Message.module.scss"
import {MessagePropsType} from "../../../Redux/state";


export function Message(props:MessagePropsType){
    return(
        <div className={s.message}>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}