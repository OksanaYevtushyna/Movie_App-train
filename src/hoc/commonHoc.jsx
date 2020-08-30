import React from 'react'
import Preloader from '../Preloader/Preloader';
import CommonMovieComponent from '../commonComponent/CommonMovieComponent';
import Paginator from '../common/Paginator/Paginator';


const CommonHoc = (currentMovie, totalPages, MoviesThunk, movieId) => {
    if (!currentMovie) {
        return <Preloader />
    } else if (currentMovie.length === 0) {
        return <div>Unfortunatelly there is no similar movies here.</div>
    } else if (Array.isArray(currentMovie)) {
        return (
            <div>
                {!currentMovie && <div><Preloader /></div>}
                <Paginator totalPages={totalPages} MoviesThunk={MoviesThunk} movieId={movieId} />
                {currentMovie && currentMovie.map(movie => <CommonMovieComponent key={movie.id} poster_path={movie.poster_path} tagline={movie.tagline} overview={movie.overview}
                    popularity={movie.popularity} original_language={movie.original_language} release_date={movie.release_date} status={movie.status} runtime={movie.runtime}
                    vote_average={movie.vote_average} vote_count={movie.vote_count} original_title={movie.original_title} id={movie.id} />)}
            </div>
        )
    } else {
        return (
            <div>
                {!currentMovie && <div><Preloader /></div>}
                {currentMovie && <CommonMovieComponent key={currentMovie.id} poster_path={currentMovie.poster_path} tagline={currentMovie.tagline}
                    original_title={currentMovie.original_title} overview={currentMovie.overview} popularity={currentMovie.popularity}
                    original_language={currentMovie.original_language} release_date={currentMovie.release_date} status={currentMovie.status}
                    runtime={currentMovie.runtime} vote_average={currentMovie.vote_average} vote_count={currentMovie.vote_count} id={currentMovie.id}
                    recommedationMoviesThunk={MoviesThunk} />}
            </div>
        )
    }
}


export default CommonHoc

