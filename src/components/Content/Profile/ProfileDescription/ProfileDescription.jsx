import React from 'react'
import styles from './ProfileDescription.module.css'
import ProfileDescriptionAvatar from './ProfileDescriptionAvatar/ProfileDescriptionAvatar'
import ProfileDescriptionInfo from './ProfileDescriptionInfo/ProfileDescriptionInfo'

export const ProfileDescription = () => {
    return (
        <div className={styles.ProfileDescription}>
            <ProfileDescriptionAvatar />
            <ProfileDescriptionInfo />
        </div>
    )
}

export default ProfileDescription;
