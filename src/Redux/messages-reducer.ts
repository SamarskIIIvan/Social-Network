

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
}
export const messagesReducer = (state:initialStateType = initialState, action: MessagesReducerActionsType):initialStateType => {

    switch (action.type) {
        case 'MESSAGES-REDUCER/SEND-MESSAGE':
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages,{id: 4, message: body}]
            }
        default:
            return state
    }
}

export type MessagesReducerActionsType = SendMessageACType


type SendMessageACType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessageBody:string) => ({type: 'MESSAGES-REDUCER/SEND-MESSAGE',newMessageBody} as const)


