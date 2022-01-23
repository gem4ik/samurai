import React, { Component } from 'react';
import s from './Dialogs.module.css'
import DialogItem from'./DialogItem/DialogItem'
import Message from './Message/Message';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem id='1' name='Sasha'/>
        <DialogItem id='2' name='Gleb'/>
        <DialogItem id='3' name='Vlad'/>
        <DialogItem id='4' name='Misha'/>
        <DialogItem id='5' name='Kostya'/>
        <DialogItem id='6' name='Vova'/>
        <DialogItem id='7' name='Valera'/>
        <DialogItem id='8' name='Sasha'/>
      </div>
      <div className={s.messages}>
        <Message message='Hi'/>
        <Message message="It's me"/>
        <Message message='Your nightmare'/>
        <Message message='7 Days'/>
      </div>
    </div>
  );
}

export default Dialogs;