import { moviesApiData } from '../api/api';

const SET_UPCOMING_MOVIES = 'SET_UPCOMING_MOVIES';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
    upcomingMovies: null,
    isLoading: false
};

const upcomingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies: action.upcomingMovies
            }
        case IS_FETCHING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export const setUpcomingMovieData = (upcomingMovies) => ({ type: SET_UPCOMING_MOVIES, upcomingMovies });
export const isFetching = (isLoading) => ({ type: IS_FETCHING, isLoading });

export const upcomingMoviesThunk = () => async (dispatch) => {
    dispatch(isFetching(true))
    let respons = await moviesApiData.getUpcomingMovies()
    if (respons.data.results) {
        dispatch(setUpcomingMovieData(respons.data.results));
        dispatch(isFetching(false))
    }
}

export default upcomingReducer;