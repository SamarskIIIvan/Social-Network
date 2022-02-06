import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Sidebar} from "./components/Sidebar/Sidebar";
import UsersContainer from "./components/Users/UsersContainer";
import {Login} from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {initialAppStateType, initializeApp} from "./Redux/app-reducer";
import {RootStateType} from "./Redux/store";
import {Preloader} from "./components/common/Preloader/Preloager";

const Messages = React.lazy(() => import('./components/Messages/Messages'));
const Profile = React.lazy(() => import('./components/Profile/Profile'));

export function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    const app = useSelector<RootStateType, initialAppStateType>(state => state.app)

    if (!app.initialized) {
        return <Preloader/>
    }
    return (
        <div className="App-wrapper">
            <Header/>
            <Nav/>
            <Sidebar/>
            <div className={"content"}>
                <Routes>
                    <Route path={"/profile/:userId"} element={
                        <React.Suspense fallback={<Preloader/>}>
                            <Profile/>
                        </React.Suspense>}/>
                    <Route path={"messages"} element={
                        <React.Suspense fallback={<Preloader/>}>
                            <Messages/>
                        </React.Suspense>}/>
                    <Route path={"news"} element={<News/>}/>
                    <Route path={"music"} element={<Music/>}/>
                    <Route path={"users"} element={<UsersContainer/>}/>
                    <Route path={"settings"} element={<Settings/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}


