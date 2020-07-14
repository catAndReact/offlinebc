import React from "react";
import styles from "./NavLogo.module.css";
import Logo from "./../../../assets/images/wave-element.svg";

const NavLogo = () => {
  return (
    <div className={styles.NavLogo}>
      <img src={Logo} alt="NavBar Logo" />
    </div>
  );
};

export default NavLogo;
