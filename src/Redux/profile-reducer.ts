


export type PostsPropsType = {
    posts: PostType[]
    newPostText: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type initialStateType = typeof initialState

const initialState = {
    posts: [{id: 1, message: "Hi i am programmer, mi names is Ivan", likesCount: 1000}] as Array<PostType>,
    newPostText: ''
}


 export const profileReducer = (state:initialStateType = initialState , action:ProfileReducerActionsType):initialStateType => {

    switch (action.type) {
        case 'PROFILE-REDUCER/ADD-POST':
            let newPost = {
                id: 2,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'PROFILE-REDUCER/UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}

export type ProfileReducerActionsType = AddPostACType
| UpdateNewPostTextACType

type AddPostACType = ReturnType<typeof addPostAC>
type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => ({type: 'PROFILE-REDUCER/ADD-POST'} as const)
export const updateNewPostTextAC = (text: any) => ({type: 'PROFILE-REDUCER/UPDATE-NEW-POST-TEXT', newText: text} as const)

