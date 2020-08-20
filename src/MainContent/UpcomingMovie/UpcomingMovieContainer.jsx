import React from 'react'
import UpcomingMovie from './UpcomingMovie'
import { connect } from 'react-redux'
import { upcomingMoviesThunk } from '../../redux/upcomingReducer';


// const UpcomingMovieContainer = (props) => {
//     return (
//         <div className={styles.upcomingMovie}>
//             <UpcomingMovie {...props} />
//         </div>
//     )
// }

class UpcomingMovieContainer extends React.Component {
    componentDidMount() {
        this.props.upcomingMoviesThunk()
    }

    render() {
        return (
            <UpcomingMovie {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        upcomingMovies: state.upcomingReducer.upcomingMovies
    }
}
export default connect(mapStateToProps, { upcomingMoviesThunk })(UpcomingMovieContainer) 