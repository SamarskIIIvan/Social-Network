import React from "react";
import s from "./ProfileInfo.module.scss"
import {ProfileInfoPropsType} from "../../Redux/profile-reducer";
import {Preloader} from "../common/Preloader/Preloager";
import {ProfileStatus} from "./ProfileStatus";



export function ProfileInfo(props: ProfileInfoPropsType ){

    if (!props.profile){
        return <Preloader/>
    }

    return(
        <div className={s.profileInfoBlock}>
            <div className={s.profilePhoto}>
                <img src={props.profile.photos.large}/>
            </div>
            <ProfileStatus status={props.status}/>
        </div>
    )
}