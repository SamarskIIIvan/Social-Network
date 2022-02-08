import React, {useEffect} from "react";
import s from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {initialAuthStateType, logout} from "../../Redux/auth-reducer";
import {RootStateType} from "../../Redux/store";
import logo from "../../assets/images/logoApp.png"

export function Header() {
    const dispatch = useDispatch()
    const auth = useSelector<RootStateType, initialAuthStateType>(state => state.auth)
    return (
        <header className={s.headerBlock}>
            <img src={logo}/>
            <div className={s.navLogin}>
                {auth.isAuth
                    ? <div>{auth.email}
                        <button onClick={() => {dispatch(logout())}}>Logout</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}