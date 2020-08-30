import React, { useEffect } from 'react'
import SimilarMovie from './SimilarMovie';
import { connect } from 'react-redux';
import { similarMoviesThunk } from '../../redux/popularReducer';
import { withRouter } from 'react-router-dom';


const SimilarMovieContainer = (props) => {
    useEffect(() => {

    }, [props.similarMovie])
    return (
        <SimilarMovie {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        similarMovie: state.popularReducer.similarMovie,
        totalPages: state.popularReducer.total_pages
    }
}
export default withRouter(connect(mapStateToProps, { similarMoviesThunk })(SimilarMovieContainer))  