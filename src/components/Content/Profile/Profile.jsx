import React from "react";
import styles from "./Profile.module.css";
import ProfileLogo from "./ProfileLogo/ProfileLogo";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const Profile = () => {
  return (
    <div className={styles.Profile}>
      <ProfileLogo />
      <ProfileDescription />
    </div>
  );
};

export default Profile;
