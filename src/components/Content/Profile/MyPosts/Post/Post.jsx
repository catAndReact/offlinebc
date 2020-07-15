import React from "react";
import styles from "./Post.module.css";
import Avatar from "./../../../../../assets/images/avatar.png";

export const Post = () => {
  return (
    <div className={styles.Post}>
      <div className={styles.avatar}>
        <img src={Avatar} alt="avatar" />
      </div>
      <div className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
        repellat.
      </div>
    </div>
  );
};

export default Post;
