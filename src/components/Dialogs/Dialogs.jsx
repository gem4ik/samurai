import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));
  let messagesElements = props.messages.map((message) => (
    <Message id={message.id} message={message.message} />
  ));

  return (
    <div className={style.messagePage}>
      <div className={style.dialog}>{dialogsElements}</div>
      <div className={style.message}>{messagesElements}</div>
    </div>
  );
};

export default dialogs;
