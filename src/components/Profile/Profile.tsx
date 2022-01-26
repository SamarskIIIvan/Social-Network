import React from "react";
import s from "./Profile.module.scss"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {RootStateType} from "../../Redux/store";
import {useSelector} from "react-redux";
import {initialStateType} from "../../Redux/profile-reducer";


export function Profile() {

    const profilePage = useSelector<RootStateType, initialStateType>(state => state.profilePage)

    return (
        <div className={s.profileBlock}>
            <ProfileInfo/>
            <MyPosts
                posts={profilePage.posts}
                newPostText={profilePage.newPostText}
               />
        </div>
    )
}