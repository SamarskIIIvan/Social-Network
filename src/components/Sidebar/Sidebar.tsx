import React from "react";
import s from "./Sidebar.module.css"
import {RootStateType} from "../../Redux/store";
import {Friends} from "./Friends/Friends";
import {useSelector} from "react-redux";
import {initialStateType} from "../../Redux/sidebar-reducer";


export function Sidebar() {

    const sidebar  =  useSelector<RootStateType, initialStateType>((state)=> state.sidebar )

    const friendsElements = sidebar.friends
        .map((friend) => <Friends name={friend.name} id={friend.id} key={friend.id} style={friend.style}/>)

    return (
        <div className={s.sideBarBlock}>
            <h2>Friends</h2>
            <div className={s.friends}>
                {friendsElements}
            </div>
        </div>
    )
}
