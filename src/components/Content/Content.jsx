import React from "react";
import styles from "./Content.module.css";
import ContentHeader from "./ContentHeader/ContentHeader";
import Profile from "./Profile/Profile";

const Content = () => {
  return (
    <div className={styles.Content}>
      <ContentHeader page="Profile"/>
      <Profile />
    </div>
  );
};

export default Content;
