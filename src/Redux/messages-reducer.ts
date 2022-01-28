

export type MessageType = {
    message: string
    id: number
}

export type DialogType = {
    name: string
    id: number
}

export type initialStateType = typeof initialState

const initialState = {
    dialogs: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Valera'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi i am Ivan'},
        {id: 2, message: 'Hi i am Sasha'},
        {id: 3, message: 'Hi i am Valera'},
    ] as Array<MessageType>,
    newMessageBody: ''
}
export const messagesReducer = (state:initialStateType = initialState, action: MessagesReducerActionsType):initialStateType => {

    switch (action.type) {
        case 'MESSAGES-REDUCER/UPDATE-NEW-MESSAGE-BODY':
            return  {
                ...state,
                newMessageBody: action.body
            }
        case 'MESSAGES-REDUCER/SEND-MESSAGE':
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody:'',
                messages: [...state.messages,{id: 4, message: body}]
            }
        default:
            return state
    }
}

export type MessagesReducerActionsType = UpdateNewMessageBodyACType
    | SendMessageACType

type UpdateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>
type SendMessageACType = ReturnType<typeof sendMessageAC>

export const updateNewMessageBodyAC = (body: any) => ({
    type: 'MESSAGES-REDUCER/UPDATE-NEW-MESSAGE-BODY',
    body: body
} as const)
export const sendMessageAC = () => ({type: 'MESSAGES-REDUCER/SEND-MESSAGE'} as const)


