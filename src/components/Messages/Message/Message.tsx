import React from "react";
import s from "./Message.module.scss"
import {MessageType} from "../../../Redux/messages-reducer";


export function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}