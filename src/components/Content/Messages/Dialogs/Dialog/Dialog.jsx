import React from "react";
import styles from "./Dialog.module.css";
import DialogBackButton from "./DialogBackButton/DialogBackButton";
import DialogMessage from "./DialogMessage/DialogMessage";
import DialogMyMessage from "./DialogMyMessage/DialogMyMessage";
import DialogSendMessage from "./DialogSendMessage/DialogSendMessage";

const Dialog = () => {
  return (
    <div className={styles.Dialog}>
        <DialogBackButton />
        <DialogMessage text="Lorem ipsum dolor sit amet."/>
        <DialogMyMessage />
        <DialogMyMessage />
        <DialogMyMessage />
        <DialogMyMessage />
        <DialogMyMessage />
        <DialogMyMessage />
        <DialogMyMessage />
        <DialogMyMessage />
        <DialogMyMessage />
        <DialogMessage text="Lorem ipsum dolor sit amet."/>
        <DialogSendMessage />
    </div>
  );
};

export default Dialog;
