import React from "react";
import styles from "./NewPost.module.css";

const NewPost = () => {
  return (
    <div className={styles.NewPost}>
      <div className={styles.textarea}>
        <textarea name="NewPost" id="NewPost" placeholder="Your news..." />
      </div>
      <div className={styles.button}>
        <button type="submit" value="Send">Send</button>
      </div>
    </div>
  );
};

export default NewPost;
