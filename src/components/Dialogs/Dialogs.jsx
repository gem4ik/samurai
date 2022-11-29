import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { buttonAddMessageActionCreator, onMessageChangeActionCreator } from "../Data/Data";

const dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));
  let messagesElements = props.messages.map((message) => (
    <Message id={message.id} message={message.message} />
  ));

  let newMessageElement = React.createRef()

  let buttonAddMessage = () => {
    props.dispatch(buttonAddMessageActionCreator())
  }

  let onMessageChange = () => {
    let newMessage = newMessageElement.current.value
    props.dispatch(onMessageChangeActionCreator(newMessage))
  }

  return (
    <div className={style.messagePage}>
      <div className={style.dialog}>{dialogsElements}</div>
      <div>
      <div className={style.message}>{messagesElements}</div>
      <div>
        <textarea
        ref={newMessageElement}
        placeholder='your message'
        value={props.newMessageText}
        onChange={onMessageChange}
        className={style.textarea}
        />
      </div>
      <div>
        <button 
        className={style.button} 
        onClick={buttonAddMessage}>
          send
          </button>
      </div>
    </div>
    </div>
  );
};

export default dialogs;
