import React from "react";
import s from "./AddPostsForm.module.scss"
import {Field, reduxForm} from "redux-form";


export function AddPostForm(props: any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newPostText"
                   component="input"
                   type="text"
                   placeholder="Enter your post"/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm({form: 'PostAddForm'})(AddPostForm)