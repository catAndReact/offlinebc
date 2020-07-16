import React from 'react'
import styles from './Messages.module.css'
import Dialogs from './Dialogs/Dialogs'
import { NavLink } from "react-router-dom";

const Messages = () => {
    return (
        <div className={styles.Messages}>
            <div className={styles.mainItem}>
                <h1>Messages</h1>
            </div>
            <NavLink to="/dialog"><Dialogs /></NavLink>
        </div>
    )
}

export default Messages;
