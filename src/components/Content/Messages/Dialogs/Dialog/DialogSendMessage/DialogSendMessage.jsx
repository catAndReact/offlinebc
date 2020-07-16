import React from "react";
import styles from "./DialogSendMessage.module.css";
import SendButton from "./../../../../../../assets/images/SendButton.svg"

const DialogSendMessage = () => {
  return (
    <div className={styles.DialogSendMessage}>
      <div className={styles.textarea}>
        <textarea name="sendMessage" id="sendMessage"></textarea>
      </div>
      <div className={styles.button}>
        <button type="submit" id="Send">
          {/* <img src={SendButton} alt="SendButton" />  */}
          Send
        </button>
      </div>
    </div>
  );
};

export default DialogSendMessage;
