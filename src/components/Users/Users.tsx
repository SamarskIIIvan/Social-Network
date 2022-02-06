import React from "react";
import s from "./Users.module.scss"
import {UsersPropsType} from "./UsersContainer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


export function Users(props: UsersPropsType) {

    return (
        <div className={s.UsersBlock}>
            <Paginator portionSize={props.portionSize}
                       onPageChanged={props.onPageChanged}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       totalUsersCount={props.totalUsersCount}/>
            <div>{
                props.users.map(user => <User user={user}
                                              key={user.id}
                                              followingInProgress={props.followingInProgress}
                                              follow={props.follow}
                                              unfollow={props.unfollow}
                    />
                )
            }
            </div>

        </div>
    )
}