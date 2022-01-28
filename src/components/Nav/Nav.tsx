import React from "react";
import s from "./Nav.module.scss"
import {NavLink} from "react-router-dom";

export function Nav(){
    return(
      <nav className={s.navBlock}>
          <div>
              <NavLink to={"profile"}>Profile</NavLink >
          </div>
          <div>
              <NavLink to={"messages"}>Messages</NavLink>
          </div>
          <div>
              <NavLink to={"news"}>News</NavLink>
          </div>
          <div>
              <NavLink to={"music"}>Music</NavLink>
          </div>
          <br/>
          <br/>
          <div>
              <NavLink to={"users"}>Users</NavLink>
          </div>
          <br/>
          <div>
              <NavLink to={"settings"}>Settings</NavLink>
          </div>
      </nav>
    )
}