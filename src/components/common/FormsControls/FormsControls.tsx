import React from "react";
import s from "./FormsControls.module.scss"
import {Field} from "redux-form";


export function Textarea({input, meta, ...props}: any) {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl}>
            <textarea {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}

export function Input({input, meta, ...props}: any) {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl}>
            <input {...input} {...props}  />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder: string| undefined,
                            name: string,
                            validators: Array<any> ,
                            component: string | React.FC | React.Component,
                            props = {},
                            text = "") => (<div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)
