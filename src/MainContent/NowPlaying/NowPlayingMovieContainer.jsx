import React from 'react'
import NowPlayingMovie from './NowPlayingMovie'
import { connect } from 'react-redux'
import { nowPlayingMoviesThunk } from '../../redux/nowPlayingReducer';


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
        nowPlayingMovies: state.nowPlayingReducer.nowPlayingMovies
    }
}
export default connect(mapStateToProps, { nowPlayingMoviesThunk })(NowPlayingMovieContainer) 