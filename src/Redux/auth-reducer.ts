import {authAPI, ResultCodesEnum, securityAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CommonActionsAppTypes, RootStateType} from "./store";
import {stopSubmit} from "redux-form";


export type initialAuthStateType = typeof initialState

const initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}


export const authReducer = (state: initialAuthStateType = initialState, action: AuthReducerActionsType): initialAuthStateType => {
    switch (action.type) {
        case "AUTH-REDUCER/SET-USER-DATA":
        case "AUTH-REDUCER/GET-CAPTCHA-URL-SUCCESS":
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

type ThunkType = ThunkAction<void, RootStateType, unknown, CommonActionsAppTypes>
type ThunkDispatchAuthType = ThunkDispatch<RootStateType, unknown, CommonActionsAppTypes>

export type AuthReducerActionsType = SetUserDataType
    | getCaptchaUrlSuccessType

type SetUserDataType = ReturnType<typeof setUserData>
type getCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>


export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'AUTH-REDUCER/SET-USER-DATA',
    payload: {id, email, login, isAuth}
} as const)
export const getCaptchaUrlSuccess = (captchaUrl: null | string) => ({
    type: 'AUTH-REDUCER/GET-CAPTCHA-URL-SUCCESS',
    payload: {captchaUrl}
} as const)

export const getAuthUserData = (): ThunkType => async (dispatch: ThunkDispatchAuthType) => {
    const res = await authAPI.me()
    let {id, email, login} = res.data.data
    if (res.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string ): ThunkType => async (dispatch: ThunkDispatchAuthType) => {
    const res = await
        authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (res.data.resultCode === ResultCodesEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch: ThunkDispatchAuthType) => {
    const res = await securityAPI.getCaptchaURL()
    const captchaUrl = res.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export const logout = (): ThunkType => async (dispatch: ThunkDispatchAuthType) => {
    let res = await
        authAPI.logout()
    if (res.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setUserData(null, null, null, false))
    }
}