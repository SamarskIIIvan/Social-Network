import React from "react";
import s from "./Friends.module.scss"
import {FriendsType} from "../../../Redux/sidebar-reducer";

export function Friends(props: FriendsType) {

    return (
        <div className={s.friendsBlock}>
            <div className={s.friends}>
                <img src={props.style} className={s.imgFriend}/><h4>{props.name}</h4>
            </div>
        </div>
    )
}