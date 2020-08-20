import React from 'react'
import styles from './PopularMovie.module.css'
import Preloader from '../../Preloader/Preloader'


const PopularMovie = ({ popularMovie, isLoading, popularMoviesThunk }) => {
    let showMovie = () => {
        popularMoviesThunk()
    }

    return (
        <div className={styles.popularMovie}>
            {!popularMovie && <div><button onClick={showMovie}>Show Popular Movies</button><Preloader /></div>}
            {popularMovie && popularMovie.map(movie => <Movie key={movie.id} title={movie.original_title} />)}
        </div>
    )
}

const Movie = (props) => {
    return (
        <div className={styles.movie}>
            {props.title}
        </div>
    )
}

export default PopularMovie