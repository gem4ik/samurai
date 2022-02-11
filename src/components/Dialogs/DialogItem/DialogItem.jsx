import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import s from './DialogItem.module.css'

const DialogItem = (props) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;