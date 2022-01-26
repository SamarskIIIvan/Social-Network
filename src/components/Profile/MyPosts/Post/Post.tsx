import React from "react";
import s from "./Post.module.scss"
import {PostType} from "../../../../Redux/profile-reducer";


export function Post(props: PostType) {
    return (
        <div className={s.post}>
            <img src="https://avatarko.ru/img/kartinka/33/Deadpool_34458.jpg" className={s.img}/>
            {props.message} <span>{props.likesCount}</span>
        </div>
    )
}