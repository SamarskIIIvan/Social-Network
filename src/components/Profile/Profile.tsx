import React, {useEffect} from "react";
import s from "./Profile.module.scss"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {RootStateType} from "../../Redux/store";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfile, initialStateType} from "../../Redux/profile-reducer";


export function Profile() {

    const dispatch = useDispatch()
    const profilePage = useSelector<RootStateType, initialStateType>(state => state.profilePage)
    useEffect(() => {
        dispatch(getUserProfile())
    }, [])

    return (
        <div className={s.profileBlock}>
            <ProfileInfo profile={profilePage.profile}/>
            <MyPosts
                posts={profilePage.posts}
                newPostText={profilePage.newPostText}
            />
        </div>
    )
}