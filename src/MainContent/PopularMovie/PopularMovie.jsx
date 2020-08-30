import React from 'react'
import styles from './PopularMovie.module.css'
import Preloader from '../../Preloader/Preloader'
import { NavLink } from 'react-router-dom'
import Paginator from '../../common/Paginator/Paginator'


const PopularMovie = ({ popularMovie, isLoading, popularMoviesThunk, similarMoviesThunk, totalPages }) => {
    let showMovie = () => {
        popularMoviesThunk()
    }


    return (
        <div className={styles.popularMovie}>
            {!popularMovie && <div><button onClick={showMovie}>Show Popular Movies</button><Preloader /></div>}
            <Paginator totalPages={totalPages} popularMoviesThunk={popularMoviesThunk} />
            {popularMovie && popularMovie.map(movie => <Movie key={movie.id} title={movie.original_title} id={movie.id} similarMoviesThunk={similarMoviesThunk}
                poster={movie.poster_path} totalPages={totalPages} />)}
        </div>
    )
}

const Movie = (props) => {
    let baseImageUrl = 'http://image.tmdb.org/t/p/w342/';
    let getSimilarMovie = () => {
        props.similarMoviesThunk(props.id)
    }
    return (
        <div>
            <NavLink to={`/similar/${props.id}`}>
                <div className={styles.movie} onClick={getSimilarMovie}>
                    <img src={baseImageUrl + props.poster} alt="There is suppose to be poster pic" />
                    <p>{props.title}</p>
                </div>
            </NavLink >
        </div>
    )
}

export default PopularMovie