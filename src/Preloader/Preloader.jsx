import React from 'react'
import preloader from '../common/preloader/preloader.gif'
import styles from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader} alt="" />
        </div>
    )
}

export default Preloader