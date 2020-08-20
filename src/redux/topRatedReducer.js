import { moviesApiData } from '../api/api';

const SET_TOP_RATED_MOVIES = 'SET_TOP_RATED_MOVIES';
const IS_LOADING = 'IS_LOADING';

let initialState = {
    topRatedMovies: null,
    isLoading: false
};

const topRatedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_RATED_MOVIES:
            return {
                ...state,
                topRatedMovies: action.topRatedMovies
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export const setTopRatedMovieData = (topRatedMovies) => ({ type: SET_TOP_RATED_MOVIES, topRatedMovies });
export const setLoading = (isLoading) => ({ type: IS_LOADING, isLoading });

export const topRatedMoviesThunk = () => async (dispatch) => {
    dispatch(setLoading(true))
    let respons = await moviesApiData.getTopRatedMovies()
    if (respons.data.results) {
        dispatch(setTopRatedMovieData(respons.data.results));
        dispatch(setLoading(false))
    }
}

export default topRatedReducer;