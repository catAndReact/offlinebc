import React from 'react'
import styles from './MyPosts.module.css'
import NewPost from './NewPost/NewPost'
import Post from './Post/Post'

export const MyPosts = () => {
    return (
        <div className={styles.MyPosts}>
            <span>My Posts</span>
            <NewPost />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts;
