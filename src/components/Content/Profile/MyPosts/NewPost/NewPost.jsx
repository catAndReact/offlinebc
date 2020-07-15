import React from "react";
import styles from "./NewPost.module.css";

const NewPost = () => {
  return (
    <div className={styles.NewPost}>
      <div className={styles.textarea}>
        <textarea
          maxlength="124"
          name="NewPost"
          id="NewPost"
          placeholder="You have 124 characters left..."
        />
      </div>
      <div className={styles.button}>
        <button type="submit" value="Send">
          Send
        </button>
      </div>
    </div>
  );
};

export default NewPost;
