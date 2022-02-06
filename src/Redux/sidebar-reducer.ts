import avaFriend1 from "../components/Sidebar/Friends/imagesFriends/friend1.png"
import avaFriend2 from "../components/Sidebar/Friends/imagesFriends/friend2.png"
import avaFriend3 from "../components/Sidebar/Friends/imagesFriends/friend3.png"


export type FriendsType = {
    id: number
    name: string
    style: any
}

export type initialStateType = typeof initialState

const initialState = {
    friends: [
        {id: 1, name: 'Valery', style: avaFriend1},
        {id: 2, name: 'Roman', style: avaFriend2},
        {id: 3, name: 'Steven', style: avaFriend3},
    ] as Array<FriendsType>
}

export const sidebarReducer = (state: initialStateType = initialState, action: any): initialStateType => {

    return state

}



