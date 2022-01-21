import React from "react";
import s from "./Profile.module.scss"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {PostsPropsType} from "../../Redux/state";


export function Profile(props:PostsPropsType){
    return(
        <div className={s.profileBlock}>
           <ProfileInfo/>
          <MyPosts posts={props.posts} />
        </div>
    )
}