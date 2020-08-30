import React from 'react'
import styles from './MainContent.module.css'

const MainContent = () => {
    return (
        <div className={styles.Main}>
            <form>
                <input placeholder='Username' />
                <input placeholder='Password' />
                <button>Log in</button>
            </form>
        </div>
    )
}


export default MainContent