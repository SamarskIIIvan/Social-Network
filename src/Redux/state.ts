import avaFriend1 from "../components/Sidebar/Friends/imagesFriends/friend1.png"
import avaFriend2 from "../components/Sidebar/Friends/imagesFriends/friend2.png"
import avaFriend3 from "../components/Sidebar/Friends/imagesFriends/friend3.png"

let rerenderEntireTree = () =>{

}

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}
export type MessagePropsType = {
    message: string
    id: number
}

export type DialogPropsType = {
    name: string
    id: number
}

export type MessagesPropsType = {
    dialogs: DialogPropsType[]
    messages: MessagePropsType[]
}
export type PostsPropsType = {
    posts: PostPropsType[]
    addPost: () => void
    updateNewPostText:(newText:any) => void
    newPostText: string
}

export type FriendsType = {
    id: number
    name: string
    style: any
}
export type FriendsPropsType = {
    friends: FriendsType[]
}

export type StatePropsType = {
    state: {
        profilePage: {
            posts: PostPropsType[]
            newPostText: string

        }
        messagesPage: {
            dialogs: DialogPropsType[]
            messages: MessagePropsType[]
        }
        sidebar: {
            friends: FriendsType[]
        }
    }
    addPost: () => void
    updateNewPostText:(newText:any) => void
}


const state = {
    profilePage: {
        posts: [{id: 1, message: "Hi i am programmer, mi names is Ivan", likesCount: 1000}],
        newPostText: ""
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi i am Ivan'},
            {id: 2, message: 'Hi i am Sasha'},
            {id: 3, message: 'Hi i am Valera'},
        ],
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Valery', style: avaFriend1},
            {id: 2, name: 'Roman', style: avaFriend2},
            {id: 3, name: 'Steven', style: avaFriend3},
        ],

    }
}

export const addPost = () => {
    let newPost = {
        id: 2,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
   rerenderEntireTree()
}
export const updateNewPostText = (newText: any) => {
    state.profilePage.newPostText = newText;
   rerenderEntireTree()
}

export const subscribe = (observer: any) =>{
    rerenderEntireTree = observer
}

export default state