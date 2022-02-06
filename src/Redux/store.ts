import {profileReducer, ProfileReducerActionsType} from "./profile-reducer";
import {messagesReducer, MessagesReducerActionsType} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {usersReducer, UsersReducerActionsType} from "./users-reducer";
import {authReducer, AuthReducerActionsType} from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'
import thunk from "redux-thunk";
import {appReducer, AppReducerActionsType} from "./app-reducer";

export type CommonActionsAppTypes = AuthReducerActionsType
    | MessagesReducerActionsType
    | ProfileReducerActionsType
    | UsersReducerActionsType
    | AppReducerActionsType

export type RootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,

})
export const store = createStore(rootReducer, applyMiddleware(thunk));











