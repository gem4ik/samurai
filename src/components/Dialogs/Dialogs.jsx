import React, { Component } from 'react';
import s from './Dialogs.module.css'
import DialogItem from'./DialogItem/DialogItem'
import Message from './Message/Message';

let dialogs = [
  {id:1, name:'Sasha'},
  {id:2, name:'Gleb'},
  {id:3, name:'Vlad'},
  {id:4, name:'Misha'},
  {id:5, name:'Kostya'},
  {id:6, name:'Vova'},
  {id:7, name:'Valera'},
  {id:8, name:'Sasha'}
]

let messages = [
  {id:1, message:'I'},
  {id:2, message:"don't"},
  {id:3, message:'even'},
  {id:4, message:'know'},
  {id:5, message:'who'},
  {id:6, message:'i'},
  {id:7, message:'am'}
]

let dialogsElements = dialogs.map( d => <DialogItem id={d.id} name={d.name}/>) 
let messagesElements = messages.map( m => <Message id={m.id} message={m.message}/>) 

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
}

export default Dialogs;