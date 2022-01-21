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
export type AppPropsType = {
    posts: PostPropsType[],
    dialogs: DialogPropsType[],
    messages: MessagePropsType[],
}
export type MessagesPropsType = {
    dialogs: DialogPropsType[],
    messages: MessagePropsType[],
}
export type PostsPropsType = {
    posts: PostPropsType[],
}

export type StatePropsType ={
    state:{
        posts: PostPropsType[],
        dialogs: DialogPropsType[],
        messages: MessagePropsType[],
    }
}

const state = {
    posts: [
        {id: 2, message: "Hi i am programmer, mi names is Ivan", likesCount: 1000}
    ],
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
}
export default state