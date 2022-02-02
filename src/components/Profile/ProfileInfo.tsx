import React from "react";
import s from "./ProfileInfo.module.scss"
import {ProfileInfoPropsType} from "../../Redux/profile-reducer";
import {Preloader} from "../common/Preloader/Preloager";



export function ProfileInfo(props: ProfileInfoPropsType ){

    if (!props.profile){
        return <Preloader/>
    }

    return(
        <div className={s.profileInfoBlock}>
            <img src={"https://www.salvat.com/colecciones/marvel-mugs/images/bodegon-marvel422x405.png?crc=303771931"}/>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
        </div>
    )
}