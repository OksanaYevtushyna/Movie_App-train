import React from 'react'
import styles from './UpcomingMovie.module.css'
import Preloader from '../../Preloader/Preloader';
import CommonMovieComponent from '../../commonComponent/CommonMovieComponent';


const UpcomingMovie = (props) => {
    return (
        <div className={styles.upcomingMovie}>
            {!props.upcomingMovies && <div><Preloader /></div>}
            {props.upcomingMovies && props.upcomingMovies.map((movie) => <CommonMovieComponent key={movie.id} poster_path={movie.poster_path} tagline={movie.tagline}
                original_title={movie.original_title} overview={movie.overview} popularity={movie.popularity} original_language={movie.original_language}
                release_date={movie.release_date} status={movie.status} runtime={movie.runtime} vote_average={movie.vote_average} vote_count={movie.vote_count} />)}
        </div>
    )
}



export default UpcomingMovie