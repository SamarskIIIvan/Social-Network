import {usersAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CommonActionsAppTypes, RootStateType} from "./store";

type photosType = {
    small: string
    large: string

}
export type UserType = {
    name: string
    id: number
    photos: photosType
    followed: boolean
    status: string
}
type initialStateType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
const initialState: initialStateType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


export const usersReducer = (state: initialStateType = initialState, action: UsersReducerActionsType): initialStateType => {
    switch (action.type) {
        case "USERS-REDUCER/FOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case "USERS-REDUCER/UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case "USERS-REDUCER/SET-USERS":
            return {
                ...state,
                users: action.users
            }
        case "USERS-REDUCER/SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "USERS-REDUCER/SET-TOTAL-USERS-COUNT":
            return {
                ...state, totalUsersCount: action.count
            }
        case "USERS-REDUCER/TOGGLE-IS-FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "USERS-REDUCER/TOGGLE-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state
    }
}
type ThunkType = ThunkAction<void, RootStateType, unknown, CommonActionsAppTypes>
type ThunkDispatchAuthType = ThunkDispatch<RootStateType, unknown, CommonActionsAppTypes>

export type UsersReducerActionsType = followSuccessType
    | unfollowSuccessType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    | toggleIsFetchingType
    | toggleIsFollowingProgressType


type followSuccessType = ReturnType<typeof followSuccess>
type unfollowSuccessType = ReturnType<typeof unfollowSuccess>
type setUsersType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>
type toggleIsFollowingProgressType = ReturnType<typeof toggleFollowingProgress>

export const followSuccess = (userId: number) => ({
    type: 'USERS-REDUCER/FOLLOW', userId
} as const)
export const unfollowSuccess = (userId: number) => ({
    type: 'USERS-REDUCER/UNFOLLOW', userId
} as const)
export const setUsers = (users: Array<UserType>) => ({
    type: 'USERS-REDUCER/SET-USERS', users
} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: 'USERS-REDUCER/SET-CURRENT-PAGE', currentPage
} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'USERS-REDUCER/SET-TOTAL-USERS-COUNT',
    count: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'USERS-REDUCER/TOGGLE-IS-FETCHING', isFetching
} as const)
export const toggleFollowingProgress = (isFollowing: boolean, userId: number) => ({
    type: 'USERS-REDUCER/TOGGLE-FOLLOWING-PROGRESS', isFollowing, userId
} as const)


export const getUsersTC = (page: number, pageSize: number): ThunkType => {
    return (dispatch: ThunkDispatchAuthType) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize)
            .then((data) => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const follow = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatchAuthType) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatchAuthType) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}


