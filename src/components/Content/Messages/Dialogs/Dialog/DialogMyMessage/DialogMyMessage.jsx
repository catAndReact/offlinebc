import React from "react";
import styles from "./DialogMyMessage.module.css";
import Avatar from "./../../../../../../assets/images/avatar.png";

const DialogMyMessage = () => {
  return (
    <div className={styles.DialogMyMessage}>
      <div className={styles.avatar}>
        <img src={Avatar} alt="Avatar" />
      </div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatum ea, iure culpa, vitae tenetur ex veritatis
        minus nihil vero blanditiis neque illum eius reiciendis quas, mollitia
        quae. Voluptas, adipisci. Culpa!
      </div>
    </div>
  );
};

export default DialogMyMessage;
