import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import Users from "./../Dialogs/Users/Users";

const Nav = () => {
  return (
    <div className={style.nav}>
      <nav>
        <div>
          <NavLink
            to="/profile"
            className={(navData) => (navData.isActive ? style.active : style.item)}
          >
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialog"
            className={(navData) => (navData.isActive ? style.active : style.item)}
          >
            Messages
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/news"
            className={(navData) => (navData.isActive ? style.active : style.item)}
          >
            News
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/music"
            className={(navData) => (navData.isActive ? style.active : style.item)}
          >
            Music
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/settings"
            className={(navData) => (navData.isActive ? style.active : style.item)}
          >
            Settings
          </NavLink>
        </div>
      </nav>
      <div className={style.friendsBar}>
        <NavLink
          to="/friends"
          className={(navData) => (navData.isActive ? style.active : style.item)}
        >
          Friends
        </NavLink>
      </div>
      <div className={style.users}>
        <Users />
      </div>
    </div>
  );
};

export default Nav;
