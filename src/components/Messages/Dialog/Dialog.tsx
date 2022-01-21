import React from "react";
import s from "./Dialog.module.scss"
import {NavLink} from "react-router-dom";
import {DialogPropsType} from "../../../Redux/state";


export function Dialog(props:DialogPropsType){

    const path = "messages/" + props.id

    return(
        <div className={s.message}>
            <div className={s.dialog}> <NavLink to={path}>{props.name}</NavLink></div>
        </div>
    )
}