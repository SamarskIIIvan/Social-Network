import React from "react";
import s from "./Users.module.scss"
import {UsersPropsType} from "./UsersContainer";


export function Users(props: UsersPropsType){
    return(
        <div className={s.UsersBlock}>
            Users
        </div>
    )
}