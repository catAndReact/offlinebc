import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/messages">Messages</NavLink>
      </div>
      <div className={styles.item}>News</div>
      <div className={styles.item}>Music</div>
    </div>
  );
};

export default NavBar;
