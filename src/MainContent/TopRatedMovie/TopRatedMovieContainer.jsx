import React from 'react'
import TopRatedMovie from './TopRatedMovie'
import { connect } from 'react-redux'
import { topRatedMoviesThunk } from '../../redux/topRatedReducer';
import { recommedationMoviesThunk } from '../../redux/upcomingReducer';


class TopRatedMovieContainer extends React.Component {
    componentDidMount() {
        this.props.topRatedMoviesThunk()
    }
    render() {
        return (
            <TopRatedMovie {...this.props} />
        )
    }
}


// const TopRatedMovieContainer = (props) => {
//     let [topRatedMovies, setTopRatedMovies] = useState(null)
//     useEffect(() => {
//         props.topRatedMoviesThunk()
//         setTopRatedMovies({ topRatedMovies: props.topRatedMovies })
//     }, [props, topRatedMovies])
//     return (
//         <TopRatedMovie {...props} />
//     )
// }

let mapStateToProps = (state) => {
    return {
        topRatedMovies: state.topRatedReducer.topRatedMovies,
        totalPages: state.topRatedReducer.total_pages
    }
}
export default connect(mapStateToProps, { topRatedMoviesThunk, recommedationMoviesThunk })(TopRatedMovieContainer) 