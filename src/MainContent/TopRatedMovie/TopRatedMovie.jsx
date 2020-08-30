import React from 'react'
import styles from './TopRatedMovie.module.css'
import Preloader from '../../Preloader/Preloader'
import CommonMovieComponent from '../../commonComponent/CommonMovieComponent'
import Paginator from '../../common/Paginator/Paginator'


const TopRatedMovie = (props) => {
    return (
        <div className={styles.topRated}>
            <h3>Top Rated: </h3>
            {!props.topRatedMovies && <Preloader />}
            <Paginator topRatedMoviesThunk={props.topRatedMoviesThunk} totalPages={props.totalPages} />
            {props.topRatedMovies && <div>{props.topRatedMovies.map((movie) => <CommonMovieComponent key={movie.id} poster_path={movie.poster_path}
                original_title={movie.original_title} overview={movie.overview} popularity={movie.popularity} original_language={movie.original_language}
                release_date={movie.release_date} status={movie.status} runtime={movie.runtime} vote_average={movie.vote_average} vote_count={movie.vote_count}
                tagline={movie.tagline} id={movie.id} recommedationMoviesThunk={props.recommedationMoviesThunk} />)}</div>}
        </div>
    )
}


// const MovieElement = (props) => {
//     return (
//         <div className={styles.top}>
//             <h3>{props.original_title}</h3>
//             <p>{props.overview}</p>
//             <div>
//                 <p><span>Popularity: {props.popularity}</span></p>
//                 <p><span>Vote average: {props.vote_average}</span></p>
//                 <span>Vote count: {props.vote_count}</span>
//             </div>
//         </div>
//     )
// }

// <MovieElement original_title={movie.original_title} overview={movie.overview} popularity={movie.popularity}
//                     vote_average={movie.vote_average} vote_count={movie.vote_count} key={movie.id} />

export default TopRatedMovie