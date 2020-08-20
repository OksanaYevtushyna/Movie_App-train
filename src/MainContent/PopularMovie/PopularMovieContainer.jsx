import React from 'react'
import PopularMovie from './PopularMovie'
import { connect } from 'react-redux'
import { popularMoviesThunk } from '../../redux/popularReducer';


const PopularMovieContainer = (props) => {
    return (
        <PopularMovie popularMovie={props.popularMovie} popularMoviesThunk={props.popularMoviesThunk} isLoading={props.isLoading} />
    )
}

let mapStateToProps = (state) => {
    return {
        popularMovie: state.popularReducer.popularMovies,
        isLoading: state.popularReducer.isLoading
    }
}

export default connect(mapStateToProps, { popularMoviesThunk })(PopularMovieContainer) 