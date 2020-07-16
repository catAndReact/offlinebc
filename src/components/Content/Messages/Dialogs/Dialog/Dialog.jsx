import React from 'react'
import styles from './Dialog.module.css'
import MyAvatar from './../../../../../assets/images/avatar.png'
import MortyAvatar from './../../../../../assets/images/Mortymer.png'

const Dialog = () => {
    return (
        <div className={styles.Dialog}>
            <div className={styles.backButton}>BackButton</div>
            <div>MortyMessage</div>
            <div>MyMessage</div>
            <div className={styles.sendMessage}><textarea name="sendMessage" id="sendMessage" ></textarea></div>
            
        </div>
    )
}

export default Dialog;
