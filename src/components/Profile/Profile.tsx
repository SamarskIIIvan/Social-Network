import React from "react";
import s from "./Profile.module.scss"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {AppPropsType, PostsPropsType} from "../../index";


export function Profile(props:PostsPropsType){
    return(
        <div className={s.profileBlock}>
           <ProfileInfo/>
          <MyPosts posts={props.posts} />
        </div>
    )
}