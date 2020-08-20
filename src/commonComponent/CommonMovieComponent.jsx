import React from 'react'
import styles from './CommonMovieComponent.module.css'


const CommonMovieComponent = (props) => {
    let baseImageUrl = 'http://image.tmdb.org/t/p/w342/';
    return (
        <div className={styles.common}>
            <img src={baseImageUrl + props.poster_path} alt="There is suppose to be poster pic" />
            <p>Tagline: <span>{props.tagline}</span></p>
            <p>Original title: <span>{props.original_title}</span></p>
            <p>language: <span>{props.original_language}</span></p>
            <p>Overview: <span>{props.overview}</span></p>
            <p>Popularity: <span>{props.popularity}</span></p>
            <p>Release date: <span>{props.release_date}</span></p>
            <p>Status: <span>{props.status}</span></p>
            <p>Runtime: {props.runtime}</p>
            <p>Vote average: <span>{props.vote_average}</span></p>  <p>Vote count: <span>{props.vote_count}</span></p>
        </div>
    )
}


export default CommonMovieComponent