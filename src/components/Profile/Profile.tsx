import React, {useEffect} from "react";
import s from "./Profile.module.scss"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {RootStateType} from "../../Redux/store";
import {useDispatch, useSelector} from "react-redux";
import {initialStateType, setUserProfileAC} from "../../Redux/profile-reducer";
import axios from "axios";





export function Profile() {



    const dispatch = useDispatch()

    const profilePage = useSelector<RootStateType, initialStateType>(state => state.profilePage)



    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then((res) => {
              dispatch(setUserProfileAC(res.data))
            })
    }, [])

    return (
        <div className={s.profileBlock}>
            <ProfileInfo profile={profilePage.profile} />
            <MyPosts
                posts={profilePage.posts}
                newPostText={profilePage.newPostText}
            />
        </div>
    )
}