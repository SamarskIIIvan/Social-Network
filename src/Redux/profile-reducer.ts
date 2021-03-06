import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CommonActionsAppTypes, RootStateType} from "./store";
import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";


export type MyPostsPropsType = {
    posts: PostType[]

}
export type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    isOwner:any
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string

}

export type PhotosType = {
    small:  string | null
    large:  string | null
}
export type ProfileType = {
    userId: any
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
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
                ...state, posts: state.posts.filter(post => post.id != action.postId)
            }
        case "PROFILE-REDUCER/SAVE-PHOTO-SUCCESS":
            return {
                //@ts-ignore
                ...state,profile: {...state.profile, photos:action.photos}
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
    | savePhotoSuccessACType

type AddPostACType = ReturnType<typeof addPostAC>
type setUserProfileACType = ReturnType<typeof setUserProfileAC>
type setStatusACType = ReturnType<typeof setStatusAC>
type deletePostACType = ReturnType<typeof deletePostAC>
type savePhotoSuccessACType = ReturnType<typeof savePhotoSuccessAC>

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
export const deletePostAC = (postId: any) => ({
    type: 'PROFILE-REDUCER/DELETE-POST', postId
} as const)
export const savePhotoSuccessAC = (photos: PhotosType) => ({
    type: 'PROFILE-REDUCER/SAVE-PHOTO-SUCCESS', photos
} as const)


export const getUserProfile = (userId: any): ThunkType => async (dispatch: ThunkDispatchProfileType) => {
    const res = await
        profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(res.data))
}
export const getStatus = (userId: any): ThunkType => async (dispatch: ThunkDispatchProfileType) => {
    const res = await
        profileAPI.getStatus(userId)
    dispatch(setStatusAC(res.data))
}
export const updateStatus = (status: string): ThunkType => async (dispatch: ThunkDispatchProfileType) => {
    const res = await
        profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}
export const savePhoto = (file:File): ThunkType => async (dispatch: ThunkDispatchProfileType) => {
    const res = await
        profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
     dispatch(savePhotoSuccessAC(res.data.data.photos))
    }
}
export const saveProfile = (profile:ProfileType): ThunkType => async (dispatch:ThunkDispatchProfileType, getState ) => {
    const userId = getState().auth.id
    const res = await
        profileAPI.saveProfile(profile)
    if (res.data.resultCode === 0) {
     dispatch(getUserProfile(userId))
    }
    else {
        dispatch(stopSubmit("edit-profile", {_error: res.data.messages[0]}))
    }
}
