import React, {useEffect} from "react";
import s from "./Users.module.scss"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import UserAva from '../../assets/images/account_avatar.png'
import {Preloader} from "../common/Preloader/Preloager";
import {NavLink} from "react-router-dom";


export function Users(props: UsersPropsType) {

    useEffect(() => {
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then((res) => {
                props.toggleIsFetching(false)
                props.setUsers(res.data.items)
                props.setTotalUsersCount(res.data.totalCount)
            })
    }, [])

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const onPageChanged = (pageNumber: any) => {
        props.setCurrentPage(pageNumber)
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
            .then((res) => {
                props.toggleIsFetching(false)
                props.setUsers(res.data.items)

            })
    }
    return (
        <div className={s.UsersBlock}>
            {props.isFetching ? <Preloader/> : null}
            <div>
                {pages.map(page  => {
                    //@ts-ignore
                    return <span className={props.currentPage === page && s.selectedPage }
                                 onClick={(e) => {
                                     onPageChanged(page)
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
                            props.unfollow(user.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(user.id)
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