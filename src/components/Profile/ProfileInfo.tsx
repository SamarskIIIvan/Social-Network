import React from "react";
import s from "./ProfileInfo.module.scss"


export function ProfileInfo(){
    return(
        <div className={s.profileInfoBlock}>
            <img src={"https://www.salvat.com/colecciones/marvel-mugs/images/bodegon-marvel422x405.png?crc=303771931"}/>
            <div>
                ava + description
            </div>
        </div>
    )
}