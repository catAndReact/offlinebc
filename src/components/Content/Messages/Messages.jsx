import React from 'react'
import styles from './Messages.module.css'
import Dialogs from './Dialogs/Dialogs'

const Messages = () => {
    return (
        <div className={styles.Messages}>
            <div className={styles.mainItem}>
                <h1>Messages</h1>
            </div>
            <Dialogs />
            <Dialogs />
            <Dialogs />
            <Dialogs />
            <Dialogs />
            <Dialogs />
            <Dialogs />
            <Dialogs />
        </div>
    )
}

export default Messages;
