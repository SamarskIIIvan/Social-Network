import React from "react";
import s from "./MyPosts.module.scss"
import {Post} from "./Post/Post";
import {addPostAC,updateNewPostTextAC} from "../../../Redux/profile-reducer";
import {useDispatch} from "react-redux";
import {PostsPropsType} from "../../../Redux/profile-reducer";


export function MyPosts(props: PostsPropsType) {

    const postsElements = props.posts
        .map((post) => <Post id={post.id} message={post.message} likesCount={post.likesCount} key={post.id}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()


    const addPost = () => {
        dispatch(addPostAC())
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value
        dispatch(updateNewPostTextAC(text))
    }



    const dispatch = useDispatch()

    return (
        <div className={s.myPots}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}/>
                </div>
                <button onClick={addPost}>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}