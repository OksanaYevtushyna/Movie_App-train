import React from 'react'
import PopularMovie from './PopularMovie'
import { connect } from 'react-redux'
import { popularMoviesThunk, similarMoviesThunk } from '../../redux/popularReducer';


const PopularMovieContainer = (props) => {
    return (
        <PopularMovie popularMovie={props.popularMovie} popularMoviesThunk={props.popularMoviesThunk} isLoading={props.isLoading}
            similarMoviesThunk={props.similarMoviesThunk} totalPages={props.total_pages} />
    )
}

let mapStateToProps = (state) => {
    return {
        popularMovie: state.popularReducer.popularMovies,
        isLoading: state.popularReducer.isLoading,
        total_pages: state.popularReducer.total_pages
    }
}

export default connect(mapStateToProps, { popularMoviesThunk, similarMoviesThunk })(PopularMovieContainer) 