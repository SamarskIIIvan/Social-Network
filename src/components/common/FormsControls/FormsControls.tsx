import React from "react";
import s from "./FormsControls.module.scss"

export function Textarea({input, meta, ...props}: any) {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl}>
                <textarea {...input} {...props} />
            { hasError && <span>{meta.error}</span>}
        </div>

    )
}

export function Input({input, meta, ...props}: any) {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl}>
            <input {...input} {...props} />
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}