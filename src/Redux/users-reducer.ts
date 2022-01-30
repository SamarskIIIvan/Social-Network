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
}


const initialState: initialStateType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
}


export const usersReducer = (state: initialStateType = initialState, action: UsersReducerActionsType): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state, totalUsersCount: action.count
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state, isFetching: action.isFetching
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


type followType = ReturnType<typeof follow>
type unfollowType = ReturnType<typeof unfollow>
type setUsersType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>

export const follow = (userId: number) => ({
    type: 'FOLLOW', userId
} as const)
export const unfollow = (userId: number) => ({
    type: 'UNFOLLOW', userId
} as const)
export const setUsers = (users: Array<UserType>) => ({
    type: 'SET-USERS', users
} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: 'SET-CURRENT-PAGE', currentPage
} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT',
    count: totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'TOGGLE-IS-FETCHING', isFetching
} as const)