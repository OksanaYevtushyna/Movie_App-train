import React, { useEffect } from 'react'
import styles from './LatestMovie.module.css'
import LatestMovie from './LatestMovie';
import { connect } from 'react-redux';
import { latestMoviesThunk } from '../../redux/latestReducer';


class LatestMovieContainer extends React.Component {
    componentDidMount() {
        this.props.latestMoviesThunk()
    }
    render() {
        return (
            <div className={styles.latestMovie}>
                <LatestMovie {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        latestMovie: state.latestReducer.latestMovies,
        isFetching: state.latestReducer.isLoading
    }
}
export default connect(mapStateToProps, { latestMoviesThunk })(LatestMovieContainer)





// const LatestMovieContainer = (props) => {
//     const { latestMovie, isFetching, latestMoviesThunk } = props;
//     useEffect(() => {
//         props.latestMoviesThunk()
//     }, [props, props.latestMovies])


//     return (
//         <div className={styles.latestMovie}>
//             <LatestMovie isFetching={isFetching} latestMoviesThunk={latestMoviesThunk} latestMovie={latestMovie} />
//         </div>
//     )
// }