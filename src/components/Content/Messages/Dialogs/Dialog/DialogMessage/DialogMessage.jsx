import React from "react";
import styles from "./DialogMessage.module.css";
import MortyAvatar from "./../../../../../../assets/images/Mortymer.png";

const DialogMessage = (props) => {
  return (
    <div className={styles.DialogMessage}>
      <div className={styles.avatar}>
        <img src={MortyAvatar} alt="MortyAvatar" />
      </div>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  );
};

export default DialogMessage;
