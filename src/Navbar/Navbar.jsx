import React from 'react';
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.list}>
                <NavLink to={'/main'} activeClassName={styles.active}>Main</NavLink>
                <NavLink to={'/popular'} activeClassName={styles.active}>Popular Movies</NavLink>
                <NavLink to={'/latest'} activeClassName={styles.active}>Latest Movies</NavLink>
                <NavLink to={'/upcoming'} activeClassName={styles.active}>Upcoming Movies</NavLink>
                <NavLink to={'/now_palying'} activeClassName={styles.active}>Now Playing Movies</NavLink>
                <NavLink to={'/top_rated'} activeClassName={styles.active}>Top Rated Movies</NavLink>
            </div>
        </div>
    )
}


export default Navbar