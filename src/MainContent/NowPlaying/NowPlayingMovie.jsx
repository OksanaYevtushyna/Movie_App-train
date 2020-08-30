import React from 'react'
import styles from './NowPlayingMovie.module.css'
import Preloader from '../../Preloader/Preloader';
import CommonMovieComponent from '../../commonComponent/CommonMovieComponent';
import Paginator from '../../common/Paginator/Paginator';


const NowPlayingMovie = (props) => {
    return (
        <div className={styles.nowPlaying}>
            {!props.nowPlayingMovies && <div><Preloader /></div>}
            <Paginator totalPages={props.totalPages} nowPlayingMoviesThunk={props.nowPlayingMoviesThunk} />
            {props.nowPlayingMovies && props.nowPlayingMovies.map((movie) => <CommonMovieComponent key={movie.id} poster_path={movie.poster_path}
                original_title={movie.original_title} overview={movie.overview} popularity={movie.popularity} original_language={movie.original_language}
                release_date={movie.release_date} status={movie.status} runtime={movie.runtime} vote_average={movie.vote_average} vote_count={movie.vote_count}
                tagline={movie.tagline} id={movie.id} recommedationMoviesThunk={props.recommedationMoviesThunk} />)}
        </div>
    )
}

export default NowPlayingMovie