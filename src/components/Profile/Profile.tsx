import React, {useEffect} from "react";
import s from "./Profile.module.scss"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {RootStateType} from "../../Redux/store";
import {useDispatch, useSelector} from "react-redux";
import {getStatus, getUserProfile, initialStateType} from "../../Redux/profile-reducer";
import {useParams} from "react-router-dom";




 function Profile() {
    const dispatch = useDispatch()
    let {userId} = useParams()

    const profilePage = useSelector<RootStateType, initialStateType>(state => state.profilePage)
    useEffect(() => {
        dispatch(getUserProfile(userId))
    }, [])
    useEffect(() => {
        dispatch(getStatus(userId))
    }, [])


    return (
        <div className={s.profileBlock}>
            <ProfileInfo profile={profilePage.profile} status={profilePage.status}/>
            <MyPosts
                posts={profilePage.posts}
            />
        </div>
    )
}
export default Profile