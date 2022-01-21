import React from "react";
import s from "./Messages.module.scss"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {MessagesPropsType} from "../../Redux/state";


export function Messages(props: MessagesPropsType) {


    const dialogsElements = props.dialogs
        .map((dialog) => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)


    const messagesElements = props.messages
        .map((message) => <Message message={message.message} id={message.id} key={message.id}/>)

    return (
        <div className={s.messagesBlock}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}