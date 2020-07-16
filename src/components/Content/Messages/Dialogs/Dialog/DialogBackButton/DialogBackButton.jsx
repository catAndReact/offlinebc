import React from "react";
import styles from "./DialogBackButton.module.css";
import BackButton from "./../../../../../../assets/images/BackButton.svg";
import { NavLink } from "react-router-dom";

const DialogBackButton = () => {
  return (
    <div className={styles.DialogBackButton}>
      <NavLink to="/messages">
        <img src={BackButton} alt="BackButton" />
      </NavLink>
    </div>
  );
};

export default DialogBackButton;
