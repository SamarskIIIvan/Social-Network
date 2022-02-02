import React, {useEffect} from "react";
import s from "./Profile.module.scss"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {RootStateType} from "../../Redux/store";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfile, initialStateType} from "../../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import {Navigate} from "react-router-dom";
import {initialAuthStateType} from "../../Redux/auth-reducer";


export function Profile() {


    const dispatch = useDispatch()
    const {userId} = useParams()
    const profilePage = useSelector<RootStateType, initialStateType>(state => state.profilePage)
    const isAuthPage =  useSelector<RootStateType,initialAuthStateType>((state)=> state.auth)
    useEffect(() => {
        dispatch(getUserProfile(userId))
    }, [])

    if (!isAuthPage.isAuth) return <Navigate to={'/login'}/>
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