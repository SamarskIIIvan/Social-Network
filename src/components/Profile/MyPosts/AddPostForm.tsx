import React from "react";
import s from "./AddPostsForm.module.scss"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

let maxLength = maxLengthCreator(10)
export function AddPostForm(props: any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                   name="newPostText"
                   component={Textarea}
                   placeholder="Post message"
                   validate={[required, maxLength]}
            />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm({form: 'PostAddForm'})(AddPostForm)