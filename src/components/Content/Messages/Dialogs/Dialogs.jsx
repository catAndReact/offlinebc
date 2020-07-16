import React from "react";
import styles from "./Dialogs.module.css";
import Avatar from "./../../../../assets/images/Mortymer.png";

const Dialogs = () => {
  return (
    <div className={styles.Dialogs}>
      <div className={styles.DialogsAvatar}>
          <img src={Avatar} alt="Avatar" />
        <div>Morty</div>
      </div>
      <div className={styles.DialogsLastMessage}>
        Lorem ipsum dolor sit amet.
      </div>
    </div>
  );
};

export default Dialogs;
