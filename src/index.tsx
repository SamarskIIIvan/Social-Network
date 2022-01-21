import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const posts = [
    {id: 2, message: "Hi i am programmer, mi names is Ivan", likesCount: 1000}
]

const dialogs = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Valera'},
]
const messages = [
    {id: 1, message: 'Hi i am Ivan'},
    {id: 2, message: 'Hi i am Sasha'},
    {id: 3, message: 'Hi i am Valera'},
]

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
    posts:PostPropsType[],
    dialogs:DialogPropsType[],
    messages:MessagePropsType[],
}
export type MessagesPropsType = {
    dialogs:DialogPropsType[],
    messages:MessagePropsType[],
}
export type PostsPropsType ={
    posts:PostPropsType[]
}


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogs={dialogs} messages={messages} posts={posts}/>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
