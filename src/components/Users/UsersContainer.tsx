import React from "react";
import {RootStateType} from "../../Redux/store";
import {connect} from 'react-redux';
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../Redux/users-reducer";

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users: Array<UserType>
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void

}


const mapStateToPropsType = (state: RootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateType>(mapStateToPropsType, mapDispatchToProps)(Users)
