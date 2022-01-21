import React from "react";
import s from "./Sidebar.module.css"
import {FriendsPropsType} from "../../Redux/state";
import {Friends} from "./Friends/Friends";


export function Sidebar(props: FriendsPropsType) {

    const friendsElements = props.friends
        .map((friend) => <Friends name={friend.name} id={friend.id} key={friend.id} style={friend.style}/>)

    return (
        <div className={s.sideBarBlock}>
            <h3>Friends</h3>
            <div className={s.friends}>
                {friendsElements}
            </div>
        </div>
    )
}
