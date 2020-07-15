import React from "react";
import styles from "./Profile.module.css";
import ProfileLogo from "./ProfileLogo/ProfileLogo";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={styles.Profile}>
      <ProfileLogo />
      <ProfileDescription />
      <MyPosts />
    </div>
  );
};

export default Profile;
