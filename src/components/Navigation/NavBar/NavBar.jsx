import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.item}>Profile</div>
            <div className={styles.item}>Messages</div>
            <div className={styles.item}>News</div>
            <div className={styles.item}>Music</div>
        </div>
    )
}

export default NavBar;
