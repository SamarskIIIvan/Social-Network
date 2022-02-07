import React from "react";
import s from "./Users.module.scss"
import userAva from '../../assets/images/account_avatar.png'
import {NavLink} from "react-router-dom";
import {UserType} from "../../Redux/users-reducer";

type UserPropsType ={
    user: UserType
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export function User(props: UserPropsType) {
    return (
        <div className={s.User}>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                         <img src={props.user.photos.small
                         != null ? props.user.photos.small
                             : userAva} className={s.usersImg}/>
                    </NavLink>

                </div>
                <div className={s.follow}>
                    {props.user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.unfollow(props.user.id)
                                  }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.follow(props.user.id)
                                  }}>Follow</button>}
                </div>
            </span>
                <span>
                   <div className={s.name}>{props.user.name}</div>
                   <div>{props.user.status}</div>
               </span>

            </div>
    )}
