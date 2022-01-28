import React, {ChangeEventHandler} from "react";
import s from "./Messages.module.scss"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../Redux/messages-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../Redux/store";
import {initialStateType} from "../../Redux/messages-reducer";


export function Messages() {

    const messagesPage =  useSelector<RootStateType, initialStateType>((state)=> state.messagesPage)
    const dispatch = useDispatch()

    const dialogsElements = messagesPage.dialogs
        .map((dialog) => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)
    const messagesElements = messagesPage.messages
        .map((message) => <Message message={message.message} id={message.id} key={message.id}/>)

    const newMessageBody = messagesPage.newMessageBody



    const onSendMessageClick = () => {
        dispatch(sendMessageAC())
    }
    const onNewMessageChange = (event:any) => {
        let body = event.target.value
        dispatch(updateNewMessageBodyAC(body))
    }


    return (
        <div className={s.messagesBlock}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea
                        placeholder={'Enter your message'}
                        value={newMessageBody}
                        onChange={onNewMessageChange}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Add message</button>
                </div>

            </div>
        </div>
    )
}