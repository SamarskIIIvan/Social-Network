import React, {useEffect} from "react";
import s from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAuthUserData, initialStateType, setUserData} from "../../Redux/auth-reducer";
import {RootStateType} from "../../Redux/store";


export function Header() {

    const auth = useSelector<RootStateType, initialStateType>(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getAuthUserData())
    }, [])
    return (
        <header className={s.headerBlock}>
            <img src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-0.png"/>
            {auth.isAuth ? auth.email : <NavLink to={'login'}>LOGIN</NavLink>}
        </header>
    )
}