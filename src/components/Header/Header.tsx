import React, {useEffect} from "react";
import s from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAuthUserData, initialAuthStateType} from "../../Redux/auth-reducer";
import {RootStateType} from "../../Redux/store";


export function Header() {

    const auth = useSelector<RootStateType, initialAuthStateType>(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getAuthUserData())
    }, [])
    return (
        <header className={s.headerBlock}>
            <img src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-0.png"/>
            <div className={s.navLogin}>
                {auth.isAuth ? auth.email : <NavLink to={'login'}>LOGIN</NavLink>}
            </div>

        </header>
    )
}