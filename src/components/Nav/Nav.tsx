import React from "react";
import s from "./Nav.module.scss"
import {NavLink} from "react-router-dom";

export function Nav(){
    return(
      <nav className={s.navBlock}>
          <div>
              <NavLink to={"profile"} style={({ isActive }) => ({ color: isActive ? '#666666' : 'white' })}>Profile</NavLink >
          </div>
          <div>
              <NavLink to={"messages"} style={({ isActive }) => ({ color: isActive ? '#666666' : 'white' })}>Messages</NavLink>
          </div>
          <div>
              <NavLink to={"news"}  style={({ isActive }) => ({ color: isActive ? '#666666' : 'white' })}>News</NavLink>
          </div>
          <div>
              <NavLink to={"music"}  style={({ isActive }) => ({ color: isActive ? '#666666' : 'white' })}>Music</NavLink>
          </div>
          <br/>
          <br/>
          <div>
              <NavLink to={"users"} style={({ isActive }) => ({ color: isActive ? '#666666' : 'white' })}>Users</NavLink>
          </div>
          <br/>
          <div>
              <NavLink to={"settings"} style={({ isActive }) => ({ color: isActive ? '#666666' : 'white' })}>Settings</NavLink>
          </div>
      </nav>
    )
}