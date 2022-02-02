import React, {ComponentType} from "react";
import {RootStateType} from "../../Redux/store";
import {connect} from 'react-redux';
import {Users} from "./Users";
import {
    follow,
    unfollow,
    getUsers,
    setCurrentPage,
    UserType
} from "../../Redux/users-reducer";
import {Preloader} from "../common/Preloader/Preloager";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import { compose} from 'redux'

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   setCurrentPage={this.props.setCurrentPage}
                   pageSize={this.props.pageSize}
                   isFetching={this.props.isFetching}
                   totalUsersCount={this.props.totalUsersCount}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   getUsers={this.props.getUsers}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}


export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType & OwnPropsType

type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

}

type mapDispatchToPropsType = {
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void


}
type OwnPropsType = {
    onPageChanged: (pageNumber: number) => void
}


const mapStateToPropsType = (state: RootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default  compose<ComponentType>(
    withAuthRedirect,
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateType>(mapStateToPropsType,
        {setCurrentPage, getUsers, follow, unfollow}),
)(UsersContainer)
