import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CommonActionsAppTypes, RootStateType} from "./store";
import {profileAPI} from "../api/api";


export type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string

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

type contacts = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type photos = {
    small: string
    large: string
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contacts
    photos: photos
}


export type initialStateType = typeof initialState

const initialState = {
    posts: [{id: 1, message: "Hi i am programmer, mi names is Ivan", likesCount: 1000}] as Array<PostType>,
    newPostText: '',
    profile: null as ProfileType | null,
    status:""
}


export const profileReducer = (state: initialStateType = initialState, action: ProfileReducerActionsType): initialStateType => {

    switch (action.type) {
        case 'PROFILE-REDUCER/ADD-POST':
            let newPost = {
                id: 2,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        case 'PROFILE-REDUCER/UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        case "PROFILE-REDUCER/SET-USER-PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "PROFILE-REDUCER/SET-STATUS":
            return {
                ...state, status: action.status
            }

        default:
            return state
    }
}
type ThunkType = ThunkAction<void, RootStateType, unknown, CommonActionsAppTypes>
type ThunkDispatchProfileType = ThunkDispatch<RootStateType, unknown, CommonActionsAppTypes>

export type ProfileReducerActionsType = AddPostACType
    | UpdateNewPostTextACType
    | setUserProfileACType
    | setStatusACType

type AddPostACType = ReturnType<typeof addPostAC>
type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
type setUserProfileACType = ReturnType<typeof setUserProfileAC>
type setStatusACType = ReturnType<typeof setStatusAC>

export const addPostAC = () => ({
    type: 'PROFILE-REDUCER/ADD-POST'
} as const)
export const updateNewPostTextAC = (text: any) => ({
    type: 'PROFILE-REDUCER/UPDATE-NEW-POST-TEXT',
    newText: text
} as const)
export const setUserProfileAC = (profile: ProfileType) => ({
    type: 'PROFILE-REDUCER/SET-USER-PROFILE', profile
} as const)
export const setStatusAC = (status: string) => ({
    type: 'PROFILE-REDUCER/SET-STATUS', status
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
            if (res.data.resultCode === 0){
                dispatch(setStatusAC(status))
            }
        })
}
