import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './DialogItem.module.css'

const DialogItem = (props) => {
  return (
    <div>
      <NavLink
      to={'/dialog/' + props.id}
      className={(navData) => (navData.isActive ? style.active : style.dialogItem)}
      >
        {props.name}
        </NavLink>
    </div>
  )
}

export default DialogItem;