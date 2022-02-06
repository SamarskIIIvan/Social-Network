import React, {ComponentType} from "react";
import {RootStateType} from "../../Redux/store";
import {connect} from 'react-redux';
import {Users} from "./Users";
import {
    follow,
    unfollow,
    getUsersTC,
    setCurrentPage,
    UserType
} from "../../Redux/users-reducer";
import {Preloader} from "../common/Preloader/Preloager";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import { compose} from 'redux'
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";

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
                   portionSize={this.props.portionSize}
            />
        </>
    }
}


export type UsersContainerPropsType = MapStateToPropsType & mapDispatchToPropsType
export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    portionSize:number
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


const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users:getUsers(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress:getFollowingInProgress(state),
        portionSize:state.usersPage.portionSize
    }
}


export default  compose<ComponentType>(
    withAuthRedirect,
    connect<MapStateToPropsType, mapDispatchToPropsType, {}, RootStateType>(mapStateToProps,
        {setCurrentPage, getUsers: getUsersTC, follow, unfollow}),
)(UsersContainer)
