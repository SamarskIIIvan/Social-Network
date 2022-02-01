import React, {useEffect} from "react";
import s from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {initialStateType, setUserData} from "../../Redux/auth-reducer";
import {RootStateType} from "../../Redux/store";

export function Header() {

    const auth = useSelector<RootStateType, initialStateType>(state => state.auth)

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((res) => {
                let {id, email, login, isAuth} = res.data.data
                if (res.data.resultCode === 0) {
                    dispatch(setUserData(id, email, login, isAuth))
                }
            })
    }, [])
    return (
        <header className={s.headerBlock}>
            <img src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-0.png"/>
            {auth.isAuth ? auth.email :  <NavLink to={'login'} >LOGIN</NavLink>}





        </header>
    )
}