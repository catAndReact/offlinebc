import React from 'react'
import styles from './NavFooter.module.css'

const NavFooter = () => {
    return (
        <div className={styles.NavFooter}>
            <div className={styles.item}>Settings</div>
            <div className={styles.item}>Logout</div>
        </div>
    )
}

export default NavFooter;
