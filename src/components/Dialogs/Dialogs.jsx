import React, { Component } from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
  let messagesElements = props.messages.map(m => <Message id={m.id} message={m.message} />)

  let dialogArea = React.createRef()

  let messageArea = () => {
     let messageArea = dialogArea.current.value
     alert(messageArea)
  }

  return (
    <div className={s.dialogs}>
      <div>
        {dialogsElements}
        </div>
      <div>
        {messagesElements}
        </div>
      <div className={s.textArea}>
        <textarea ref={dialogArea}></textarea>
        <button onClick={messageArea} >send</button>
      </div>
    </div>
  );
}

export default Dialogs;