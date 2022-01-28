
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import { createStore, combineReducers } from 'redux'
import {usersReducer} from "./users-reducer";



export type RootStateType = ReturnType<typeof rootReducer>

  const rootReducer = combineReducers({
      profilePage: profileReducer,
      messagesPage: messagesReducer,
      sidebar: sidebarReducer,
      usersPage:usersReducer,
  })


 export const store = createStore(rootReducer);











