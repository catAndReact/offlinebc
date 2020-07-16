import React from "react";
import { Route } from "react-router-dom";

import styles from "./Content.module.css";
import ContentHeader from "./ContentHeader/ContentHeader";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import Dialog from "./Messages/Dialogs/Dialog/Dialog";

const Content = () => {
  return (
      <div className={styles.Content}>
        <ContentHeader page="Hello MTHFCKR" />
        <Route path="/profile" component={Profile} />
        <Route path="/messages" component={Messages} />
        <Route path="/dialog" component={Dialog} />
      </div>
  );
};

export default Content;
