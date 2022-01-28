import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Messages} from "./components/Messages/Messages";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Sidebar} from "./components/Sidebar/Sidebar";
import UsersContainer from "./components/Users/UsersContainer";


export function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <Nav/>
            <Sidebar/>
            <div className={"content"}>
                <Routes>
                    <Route path={"profile"} element={<Profile/>}/>
                    <Route path={"messages"} element={<Messages/>}/>
                    <Route path={"news"} element={<News/>}/>
                    <Route path={"music"} element={<Music/>}/>
                    <Route path={"users"} element={<UsersContainer/>}/>
                    <Route path={"settings"} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


