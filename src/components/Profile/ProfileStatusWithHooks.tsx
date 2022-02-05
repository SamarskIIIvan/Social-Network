import React, {useEffect, useState} from "react";
import s from "./ProfileStatus.module.scss";
import {useDispatch} from "react-redux";
import {updateStatus} from "../../Redux/profile-reducer";


type ProfileStatusPropsType = {
    status: string

}

export function ProfileStatusWithHooks(props: ProfileStatusPropsType) {

    const dispatch = useDispatch()

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true)
    }
    const deActiveEditMode = () => {
        setEditMode(false)
        dispatch(updateStatus(status))
    }
    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.profileStatusBlock}>
            {!editMode &&
            <div>
                <span onDoubleClick={activeEditMode}>{props.status}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deActiveEditMode} value={status}/>
            </div>
            }
        </div>
    )
}