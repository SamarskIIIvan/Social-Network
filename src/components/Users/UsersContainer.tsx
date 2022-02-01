import React from "react";
import {RootStateType} from "../../Redux/store";
import {connect} from 'react-redux';
import {Users} from "./Users";
import {
    follow, setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from "../../Redux/users-reducer";
import {Preloader} from "../common/Preloader/Preloager";
import axios from "axios";


class usersContainer extends React.Component<UsersContainerPropsType>{
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
            .then((res) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }
    onPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
            .then((res) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)

            })
    }
    render() {
        return<>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   setUsers={this.props.setUsers}
                   currentPage={this.props.currentPage}
                   setCurrentPage={this.props.setCurrentPage}
                   pageSize={this.props.pageSize}
                   isFetching={this.props.isFetching}
                   setTotalUsersCount={setTotalUsersCount}
                   totalUsersCount={this.props.totalUsersCount}
                   toggleIsFetching={toggleIsFetching}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
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

}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void



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
    }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateType>(mapStateToPropsType,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(usersContainer)
