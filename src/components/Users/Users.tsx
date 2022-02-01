import React, {useEffect} from "react";
import s from "./Users.module.scss"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import UserAva from '../../assets/images/account_avatar.png'
import {NavLink} from "react-router-dom";


export function Users(props: UsersPropsType) {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div className={s.UsersBlock}>
            <div>
                {pages.map(page => {
                    //@ts-ignore
                    return <span className={props.currentPage === page && s.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(page)
                                 }}>{page}</span>
                })}
            </div>
            {props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile'}>
                         <img src={user.photos.small
                         != null ? user.photos.small
                             : UserAva} className={s.usersImg}/>
                    </NavLink>

                </div>
                <div className={s.follow}>
                    {user.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,  {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "32a2fb05-a0a6-4dbc-999f-c58d152b8cf3"
                                }
                            })
                                .then((res) => {
                                    if (res.data.resultCode === 0) {
                                        props.unfollow(user.id)
                                    }
                                })

                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},{
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "32a2fb05-a0a6-4dbc-999f-c58d152b8cf3"
                                }
                            })
                                .then((res) => {
                                    if (res.data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                })

                        }}>Follow</button>
                    }
                </div>
            </span>
                <span>
                   <div className={s.name}>{user.name}</div>
                   <div>{user.status}</div>
               </span>

            </div>)}
        </div>
    )
}