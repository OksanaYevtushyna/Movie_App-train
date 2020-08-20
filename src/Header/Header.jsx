import React from 'react';
import styles from './Header.module.css'
import logo from '../common/img/logo_movie.png'


const Header = () => {
    return (
        <div className={styles.Header}>
            <img src={logo} alt="logo" />
            <div>menu</div>
        </div>
    )
}

export default Header