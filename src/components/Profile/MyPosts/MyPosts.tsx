import React from "react";
import s from "./MyPosts.module.scss"
import {Post} from "./Post/Post";
import {addPostAC, MyPostsPropsType} from "../../../Redux/profile-reducer";
import {useDispatch} from "react-redux";
import {AddPostReduxForm} from "./AddPostForm";


export function MyPosts(props: MyPostsPropsType) {


    const dispatch = useDispatch()

    const postsElements = props.posts
        .map((post) => <Post id={post.id} message={post.message} likesCount={post.likesCount} key={post.id}/>)

    const addNewPost = (values: any) => {
        dispatch(addPostAC(values.newPostText))
    }

    return (
        <div className={s.myPots}>
            <h2>My posts</h2>
            <AddPostReduxForm onSubmit={addNewPost}/>
            {postsElements}
        </div>
    )
}