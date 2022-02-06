import React from "react";
import s from "./Messages.module.scss"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {sendMessageAC} from "../../Redux/messages-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../Redux/store";
import {initialStateType} from "../../Redux/messages-reducer";
import {initialAuthStateType} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {AddMessageReduxForm} from "./Message/AddMessageForm";


 function Messages() {

    const messagesPage =  useSelector<RootStateType, initialStateType>((state)=> state.messagesPage)
    const isAuthPage =  useSelector<RootStateType,initialAuthStateType>((state)=> state.auth)
    const dispatch = useDispatch()
    const dialogsElements = messagesPage.dialogs
        .map((dialog) => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)
    const messagesElements = messagesPage.messages
        .map((message) => <Message message={message.message} id={message.id} key={message.id}/>)


    
  const addNewMessage = (values:any) => {
      dispatch(sendMessageAC(values.newMessageBody))
    }


    if (!isAuthPage.isAuth ) return <Navigate to={'/login'}/>
    return (
        <div className={s.messagesBlock}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}
export default Messages