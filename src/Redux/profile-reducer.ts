import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CommonActionsAppTypes, RootStateType} from "./store";
import {profileAPI} from "../api/api";


export type MyPostsPropsType = {
    posts: PostType[]

}
export type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type contacts = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type photos = {
    small: string
    large: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contacts
    photos: photos
}


export type initialStateType = typeof initialState

const initialState = {
    posts: [
        {id: 1, message: "Hello! How are you?:)", likesCount: 1000},
        {id: 2, message: "Hi i am programmer!", likesCount: 100},
        {id: 3, message: "Hi!", likesCount: 2},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ""
}


export const profileReducer = (state: initialStateType = initialState, action: ProfileReducerActionsType): initialStateType => {

    switch (action.type) {
        case 'PROFILE-REDUCER/ADD-POST':
            let newPost = {
                id: 2,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case "PROFILE-REDUCER/SET-USER-PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "PROFILE-REDUCER/SET-STATUS":
            return {
                ...state, status: action.status
            }
        case "PROFILE-REDUCER/DELETE-POST":
            return {
                ...state,posts: state.posts.filter(post=>post.id != action.postId)
            }
        default:
            return state
    }
}
type ThunkType = ThunkAction<void, RootStateType, unknown, CommonActionsAppTypes>
type ThunkDispatchProfileType = ThunkDispatch<RootStateType, unknown, CommonActionsAppTypes>

export type ProfileReducerActionsType = AddPostACType
    | setUserProfileACType
    | setStatusACType
    | deletePostACType

type AddPostACType = ReturnType<typeof addPostAC>
type setUserProfileACType = ReturnType<typeof setUserProfileAC>
type setStatusACType = ReturnType<typeof setStatusAC>
type deletePostACType = ReturnType<typeof deletePostAC>

export const addPostAC = (newPostText: string) => ({
    type: 'PROFILE-REDUCER/ADD-POST',
    newPostText
} as const)
export const setUserProfileAC = (profile: ProfileType) => ({
    type: 'PROFILE-REDUCER/SET-USER-PROFILE', profile
} as const)
export const setStatusAC = (status: string) => ({
    type: 'PROFILE-REDUCER/SET-STATUS', status
} as const)
export const deletePostAC = (postId:any) => ({
    type: 'PROFILE-REDUCER/DELETE-POST',postId
} as const)


export const getUserProfile = (userId: any): ThunkType => (dispatch: ThunkDispatchProfileType) => {
    profileAPI.getProfile(userId)
        .then((res) => {
            dispatch(setUserProfileAC(res.data))
        })
}
export const getStatus = (userId: any): ThunkType => (dispatch: ThunkDispatchProfileType) => {
    profileAPI.getStatus(userId)
        .then((res) => {
            dispatch(setStatusAC(res.data))
        })
}
export const updateStatus = (status: string): ThunkType => (dispatch: ThunkDispatchProfileType) => {
    profileAPI.updateStatus(status)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}
