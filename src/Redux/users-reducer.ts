type photosType = {
    photos: {
        small: string
        large: string
    }
}
type initialStateType = typeof initialState


const initialState = {
    users: [{
        name: 'Ivan',
        id: 1,
        photos: "",
        status: true,
        followed: false,
    }]
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
export const setUsersAC = (users: any) => ({type: 'SET-USERS', users} as const)