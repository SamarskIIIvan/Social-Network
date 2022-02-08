import {authAPI, ResultCodesEnum} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CommonActionsAppTypes, RootStateType} from "./store";
import {stopSubmit} from "redux-form";


export type initialAuthStateType = typeof initialState

const initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false
}


export const authReducer = (state: initialAuthStateType = initialState, action: AuthReducerActionsType): initialAuthStateType => {
    switch (action.type) {
        case "AUTH-REDUCER/SET-USER-DATA":
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
type SetUserDataType = ReturnType<typeof setUserData>


export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'AUTH-REDUCER/SET-USER-DATA',
    payload: {id, email, login, isAuth}
} as const)

export const getAuthUserData = (): ThunkType => async (dispatch: ThunkDispatchAuthType) => {
    let res = await authAPI.me()
    let {id, email, login} = res.data.data
    if (res.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: null| string = null): ThunkType => async (dispatch: any) => {
    let res = await
        authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = (): ThunkType => async (dispatch: ThunkDispatchAuthType) => {
    let res = await
        authAPI.logout()
    if (res.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setUserData(null, null, null, false))
    }
}