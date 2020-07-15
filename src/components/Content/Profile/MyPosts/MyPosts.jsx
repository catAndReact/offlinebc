import React from 'react'
import styles from './MyPosts.module.css'
import NewPost from './NewPost/NewPost'

export const MyPosts = () => {
    return (
        <div className={styles.MyPosts}>
            <span>My Posts</span>
            <NewPost />
        </div>
    )
}

export default MyPosts;
