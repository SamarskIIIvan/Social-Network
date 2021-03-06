import {RootStateType} from "./store";

export const getUsers = (state: RootStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}
export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount
}
export const getFollowingInProgress = (state: RootStateType) => {
    return state.usersPage.followingInProgress
}
export const getIsFetching = (state: RootStateType) => {
    return state.usersPage.isFetching
}