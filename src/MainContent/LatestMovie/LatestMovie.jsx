import React from 'react'
import styles from './LatestMovie.module.css'
import Preloader from '../../Preloader/Preloader';
import CommonMovieComponent from '../../commonComponent/CommonMovieComponent';


const LatestMovie = (props) => {
    return (
        <div className={styles.latestMovie}>
            {!props.latestMovie && <div><Preloader /></div>}
            {props.latestMovie && <CommonMovieComponent key={props.latestMovie.id} poster_path={props.latestMovie.poster_path} tagline={props.latestMovie.tagline}
                original_title={props.latestMovie.original_title} overview={props.latestMovie.overview} popularity={props.latestMovie.popularity}
                original_language={props.latestMovie.original_language} release_date={props.latestMovie.release_date} status={props.latestMovie.status}
                runtime={props.latestMovie.runtime} vote_average={props.latestMovie.vote_average} vote_count={props.latestMovie.vote_count} />}
        </div>
    )
}

// const Latest = (props) => {
//     return (
//         <div className={styles.latest}>
//             <img src={props.baseImageUrl + props.poster_path} alt="There is suppose to be poster pic" />
//             <p>Tagline: <span>{props.tagline}</span></p>
//             <p>Original title: <span>{props.original_title}</span></p>
//             <p>language: <span>{props.original_language}</span></p>
//             <p>Overview: <span>{props.overview}</span></p>
//             <p>Popularity: <span>{props.popularity}</span></p>
//             <p>Release date: <span>{props.release_date}</span></p>
//             <p>Status: <span>{props.status}</span></p>
//             <p>Runtime: {props.runtime}</p>
//             <p>Vote average: <span>{props.vote_average}</span></p>  <p>Vote count: <span>{props.vote_count}</span></p>
//         </div>
//     )
// }

export default LatestMovie