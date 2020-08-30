import CommonHoc from '../../hoc/commonHoc';


const SimilarMovie = (props) => {
    let movieId = props.match.params.movieId
    return (
        CommonHoc(props.similarMovie, props.totalPages, props.similarMoviesThunk, movieId)
    )
}


export default SimilarMovie

// import React from 'react'
// import Preloader from '../../Preloader/Preloader';
// import CommonMovieComponent from '../../commonComponent/CommonMovieComponent';
// import CommonHoc from '../../hoc/commonHoc';

// const SimilarMovie = (props) => {
//     return (
//         <div>
//             {!props.similarMovie && <div><Preloader /></div>}
//             {props.similarMovie && props.similarMovie.map(movie => <CommonMovieComponent key={movie.id} poster_path={movie.poster_path} tagline={movie.tagline}
//                 original_title={movie.original_title} overview={movie.overview} popularity={movie.popularity} original_language={movie.original_language}
//                 release_date={movie.release_date} status={movie.status} runtime={movie.runtime} vote_average={movie.vote_average} vote_count={movie.vote_count} />)}
//         </div>
//     )
// }