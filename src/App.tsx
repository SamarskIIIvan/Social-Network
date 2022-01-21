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
import {AppPropsType} from "./index";


function App(props:AppPropsType) {
    return (
        <div className="App-wrapper">
            <Header/>
            <Nav/>
            <div className={"content"}>
                <Routes>
                    <Route path={"profile"}  element={<Profile posts={props.posts}/>}/>
                    <Route path={"messages"} element={<Messages messages={props.messages} dialogs={props.dialogs}/>}/>
                    <Route path={"news"} element={<News/>}/>
                    <Route path={"music"} element={<Music/>}/>
                    <Route path={"settings"} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
