
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import { createStore, combineReducers } from 'redux'



export type RootStateType = ReturnType<typeof rootReducer>

  const rootReducer = combineReducers({
      profilePage: profileReducer,
      messagesPage: messagesReducer,
      sidebar: sidebarReducer,
  })


 export const store = createStore(rootReducer);











