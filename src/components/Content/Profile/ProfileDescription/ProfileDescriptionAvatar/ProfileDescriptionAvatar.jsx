import React from "react";
import styles from "./ProfileDescriptionAvatar.module.css";
import Avatar from "./../../../../../assets/images/avatar.png"

const ProfileDescriptionAvatar = () => {
  return (
    <div className={styles.ProfileDescriptionAvatar}>
      <img src={Avatar} alt="Avatar" />
    </div>
  );
};

export default ProfileDescriptionAvatar;
