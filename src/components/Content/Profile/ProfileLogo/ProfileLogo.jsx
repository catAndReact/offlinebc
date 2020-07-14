import React from 'react'
import styles from './ProfileLogo.module.css'
import Logo from './../../../../assets/images/logo-word.svg'

export const ProfileLogo = () => {
    return (
        <div className={styles.ProfileLogo}>
            <img src={Logo} alt="Logo" />
        </div>
    )
}

export default ProfileLogo;
