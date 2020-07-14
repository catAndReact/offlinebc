import React from 'react'
import styles from './Navigation.module.css'
import NavLogo from './NavLogo/NavLogo'
import NavBar from './NavBar/NavBar'
import NavFooter from './NavFooter/NavFooter'

const Navigation = () => {
    return (
        <div className={styles.Navigation}>
            <NavLogo />
            <NavBar />
            <NavFooter />
        </div>
    )
}

export default Navigation;
