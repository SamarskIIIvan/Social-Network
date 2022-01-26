import React from "react";
import s from "./Dialog.module.scss"
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../Redux/messages-reducer";


export function Dialog(props:DialogType){

    const path = "messages/" + props.id

    return(
        <div className={s.message}>
            <div className={s.dialog}> <NavLink to={path}>{props.name}</NavLink></div>
        </div>
    )
}