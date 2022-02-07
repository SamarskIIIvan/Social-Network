import React from "react";
import s from "./ProfileInfo.module.scss"
import {ProfileInfoPropsType, savePhoto} from "../../Redux/profile-reducer";
import {Preloader} from "../common/Preloader/Preloager";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userAva from '../../assets/images/account_avatar.png'
import {useDispatch} from "react-redux";


export function ProfileInfo(props: ProfileInfoPropsType ){

   const dispatch = useDispatch()
    if (!props.profile){
        return <Preloader/>
    }
    const onMainPhotoSelected = (e:any)=>{
      if (e.target.files.length){
         dispatch(savePhoto(e.target.files[0]))
      }
    }

    return(
        <div className={s.profileInfoBlock}>
            <div className={s.profilePhoto}>
                <img src={props.profile.photos.large || userAva }  />
            </div>
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

            <ProfileStatusWithHooks status={props.status}/>
        </div>
    )
}