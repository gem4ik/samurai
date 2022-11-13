import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Nav.module.css'
import Users from './../Dialogs/Users/Users'

const Nav = () => {
  return (
    <div className={s.nav}>
    <nav>
      <div>
        <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
      </div>
      <div >
        <NavLink to='/dialog' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/news' className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
      </div>
      <div>
        <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
      </div>
      <div>
        <NavLink to='/settings' className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
      </div>
    </nav>
    <div className={s.friendsBar}>
    <NavLink to='/friends' className = { navData => navData.isActive ? s.active : s.item }>Friends</NavLink>
  </div>
  <div className={s.users}>
    <Users />
    </div>
  </div>
  );
}

export default Nav;