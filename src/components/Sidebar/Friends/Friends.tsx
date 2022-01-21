import React from "react";
import s from "./Friends.module.scss"
import {FriendsType} from "../../../Redux/state";

export function Friends(props: FriendsType) {

    return (
        <div className={s.friendsBlock}>
            <div className={s.friends}>
                <img src={props.style} className={s.imgFriend}/> {props.name}
            </div>
        </div>
    )
}