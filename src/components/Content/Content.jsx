import React from "react";
import styles from "./Content.module.css";
import ContentHeader from "./ContentHeader/ContentHeader";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import Dialog from "./Messages/Dialogs/Dialog/Dialog";

const Content = () => {
  return (
    <div className={styles.Content}>
      <ContentHeader page="Hello MTHFCKR"/>
      {/* <Profile /> */}
      {/* <Messages /> */}
      <Dialog />
    </div>
  );
};

export default Content;
