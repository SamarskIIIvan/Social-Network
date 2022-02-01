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
        case "USERS_REDUCER/FOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case "USERS_REDUCER/UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case "USERS_REDUCER/SET-USERS":
            return {
                ...state,
                users: action.users
            }
        case "USERS_REDUCER/SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "USERS_REDUCER/SET-TOTAL-USERS-COUNT":
            return {
                ...state, totalUsersCount: action.count
            }
        case "USERS_REDUCER/TOGGLE-IS-FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "USERS_REDUCER/TOGGLE-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress:action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !=action.userId)
            }

        default:
            return state
    }
}

type UsersReducerActionsType = followType
    | unfollowType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    | toggleIsFetchingType
    | toggleIsFollowingProgressType


type followType = ReturnType<typeof follow>
type unfollowType = ReturnType<typeof unfollow>
type setUsersType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>
type toggleIsFollowingProgressType = ReturnType<typeof toggleFollowingProgress>

export const follow = (userId: number) => ({
    type: 'USERS_REDUCER/FOLLOW', userId
} as const)
export const unfollow = (userId: number) => ({
    type: 'USERS_REDUCER/UNFOLLOW', userId
} as const)
export const setUsers = (users: Array<UserType>) => ({
    type: 'USERS_REDUCER/SET-USERS', users
} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: 'USERS_REDUCER/SET-CURRENT-PAGE', currentPage
} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'USERS_REDUCER/SET-TOTAL-USERS-COUNT',
    count: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'USERS_REDUCER/TOGGLE-IS-FETCHING', isFetching
} as const)
export const toggleFollowingProgress = (isFollowing: boolean, userId: number) => ({
    type: 'USERS_REDUCER/TOGGLE-FOLLOWING-PROGRESS', isFollowing, userId
} as const)