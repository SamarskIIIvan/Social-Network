import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CommonActionsAppTypes, RootStateType} from "./store";

export type initialStateType = typeof initialState

const initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false
}


export const authReducer = (state: initialStateType = initialState, action: AuthReducerActionsType): initialStateType => {
    switch (action.type) {
        case "AUTH-REDUCER/SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
                isAuth: true
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

export const getAuthUserData = ():ThunkType => (dispatch:ThunkDispatchAuthType) => {
    authAPI.me()
        .then((res) => {
            let {id, email, login, isAuth} = res.data.data
            if (res.data.resultCode === 0) {
                dispatch(setUserData(id, email, login, isAuth))
            }
        })
}