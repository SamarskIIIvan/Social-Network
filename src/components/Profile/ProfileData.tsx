import React from "react";
import s from "./ProfileData.module.scss"
import {ContactsType, ProfileType} from "../../Redux/profile-reducer";

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner:boolean
    goToEditMode:()=>void
}
type ContactPropsType ={
    contactTitle: string
    contactValues: string
}

export const ProfileData:React.FC<ProfileDataPropsType> = ({profile,isOwner,goToEditMode}) => {

    const Contact:React.FC<ContactPropsType> = ({contactTitle, contactValues}) => {
        return(
            <div className={s.contact}>
                <b>{contactTitle}</b>: {contactValues}
            </div>
        )
    }
    return(
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>lookingForAJob</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My Professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>Contacts</b>: {
                Object.keys(profile.contacts)
                    .map(key =>{
                return <Contact key={key} contactTitle={key} contactValues={profile.contacts[key as keyof ContactsType]}/>
            })}
            </div>
        </div>
    )
}
