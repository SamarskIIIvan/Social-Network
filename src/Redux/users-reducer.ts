


type photosType = {
    photos: {
        small: string
        large: string
    }
}

export type UserType ={
        name: string
        id:number
        photos: photosType
        followed: boolean
}

type initialStateType = {
    users:Array<UserType>
}


const initialState:initialStateType = {
    users: []
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
                users:[...state.users, ...action.users]
            }

        default:
            return state
    }
}

 type UsersReducerActionsType = followACType
    | unfollowACType
    | setUsersACType


type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)