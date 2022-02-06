import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {CommonActionsAppTypes, RootStateType} from "./store";
import {getAuthUserData} from "./auth-reducer";


export type initialAppStateType = typeof initialState

const initialState = {
    initialized: false
}


export const appReducer = (state: initialAppStateType = initialState, action: AppReducerActionsType): initialAppStateType => {
    switch (action.type) {
        case "APP-REDUCER/SET-INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: true
            }


        default:
            return state
    }
}

type ThunkType = ThunkAction<void, RootStateType, unknown, CommonActionsAppTypes>
type ThunkDispatchAuthType = ThunkDispatch<RootStateType, unknown, CommonActionsAppTypes>

export type AppReducerActionsType = initializedSuccessType
type initializedSuccessType = ReturnType<typeof iInitializedSuccess>


export const iInitializedSuccess = () => ({
    type: 'APP-REDUCER/SET-INITIALIZED-SUCCESS'
} as const)

export const initializeApp = (): ThunkType => (dispatch: ThunkDispatchAuthType) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(iInitializedSuccess())
        })
}

