import {profileReducer, ProfileReducerActionsType} from "./profile-reducer";
import {messagesReducer, MessagesReducerActionsType} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {usersReducer, UsersReducerActionsType} from "./users-reducer";
import {authReducer, AuthReducerActionsType} from "./auth-reducer";
import thunk from "redux-thunk";


export type CommonActionsAppTypes = AuthReducerActionsType
    | MessagesReducerActionsType
    | ProfileReducerActionsType
    | UsersReducerActionsType

export type RootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer

})


export const store = createStore(rootReducer, applyMiddleware(thunk));











