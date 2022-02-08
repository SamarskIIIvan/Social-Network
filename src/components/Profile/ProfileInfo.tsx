import React, {ChangeEvent, useState} from "react";
import s from "./ProfileInfo.module.scss"
import {ProfileInfoPropsType, savePhoto, saveProfile} from "../../Redux/profile-reducer";
import {Preloader} from "../common/Preloader/Preloager";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userAva from '../../assets/images/account_avatar.png'
import {useDispatch} from "react-redux";
import {ProfileData} from "./ProfileData";
import {ProfileDataReduxForm} from "./ProfileDataForm";


export function ProfileInfo(props: ProfileInfoPropsType) {
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }

    const onSubmit = (formData: any) => {
        dispatch(saveProfile(formData))
        setEditMode(false)
    }
    return (
        <div className={s.profileInfoBlock}>
            <div className={s.profilePhoto}>
                <img src={props.profile.photos.large || userAva}/>
            </div>
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            {editMode
                ? <ProfileDataReduxForm onSubmit={onSubmit} initialValues={props.profile} />
                : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                    setEditMode(true)
                }}/>
            }
            <ProfileStatusWithHooks status={props.status}/>

        </div>
    )
}



