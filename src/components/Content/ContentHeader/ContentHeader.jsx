import React from 'react'
import styles from './ContentHeader.module.css'

const ContentHeader = (props) => {
    return (
        <div className={styles.ContentHeader}>
            {props.page}
        </div>
    )
}

export default ContentHeader;
