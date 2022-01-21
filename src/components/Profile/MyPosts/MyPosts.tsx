import React from "react";
import s from "./MyPosts.module.scss"
import {Post} from "./Post/Post";
import {PostsPropsType} from "../../../index";


export function MyPosts(props:PostsPropsType){

    const postsElements = props.posts.map((post)=><Post id={post.id} message={post.message}  likesCount={post.likesCount}/>)


    return(
        <div className={s.myPots}>
                <h2>My posts</h2>
            <div>
                <div>
                    <textarea ></textarea>
                </div>
                <button>Add Post</button>
            </div>
            {postsElements}
            </div>
    )
}