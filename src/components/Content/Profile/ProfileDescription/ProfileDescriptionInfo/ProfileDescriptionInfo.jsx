import React from 'react'
import styles from './ProfileDescriptionInfo.module.css'

const ProfileDescriptionInfo = () => {
    return (
        <div className={styles.ProfileDescriptionInfo}>
            <div className={`${styles.item} ${styles.myName}`}>Alexandr N.</div>
            <div className={styles.item}>Date of Birth: 10 August</div>
            <div className={styles.item}>City: Bila Tserkva</div>
            <div className={styles.item}>Education: BNAU'15</div>
            <div className={styles.item}>Web Site: hulumulu.org</div>
        </div>
    )
}

export default ProfileDescriptionInfo;
