import React from 'react'
import NowPlayingMovie from './NowPlayingMovie'
import { connect } from 'react-redux'
import { nowPlayingMoviesThunk } from '../../redux/nowPlayingReducer';
import { recommedationMoviesThunk } from '../../redux/upcomingReducer';


class NowPlayingMovieContainer extends React.Component {
    componentDidMount() {
        this.props.nowPlayingMoviesThunk()
    }

    render() {
        return (
            <NowPlayingMovie {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        nowPlayingMovies: state.nowPlayingReducer.nowPlayingMovies,
        totalPages: state.nowPlayingReducer.total_pages
    }
}
export default connect(mapStateToProps, { nowPlayingMoviesThunk, recommedationMoviesThunk })(NowPlayingMovieContainer) 