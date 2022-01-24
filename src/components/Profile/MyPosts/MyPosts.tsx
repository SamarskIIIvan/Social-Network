import React from "react";
import s from "./MyPosts.module.scss"
import {Post} from "./Post/Post";
import {PostsPropsType} from "../../../Redux/state";


export function MyPosts(props:PostsPropsType){

    const postsElements = props.posts.map((post)=><Post id={post.id} message={post.message}  likesCount={post.likesCount} key={post.id}/>)

     const newPostElement = React.createRef<HTMLTextAreaElement>()
     const addPost = () =>{
         props.addPost()

     }
     const onChange = ( ) =>{
         let text = newPostElement.current?.value
         props.updateNewPostText(text)

     }
    return(
        <div className={s.myPots}>
                <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onChange} ></textarea>
                </div>
                <button onClick={addPost}>Add Post</button>
            </div>
            {postsElements}
            </div>
    )
}