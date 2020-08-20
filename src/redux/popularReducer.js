import { moviesApiData } from '../api/api';

const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
    popularMovies: null,
    isLoading: false
};

const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: action.popularMovies
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

export const setPopularMovieData = (popularMovies) => ({ type: SET_POPULAR_MOVIES, popularMovies });
export const isFetching = (isLoading) => ({ type: IS_FETCHING, isLoading });

export const popularMoviesThunk = () => async (dispatch) => {
    dispatch(isFetching(true))
    let respons = await moviesApiData.getPopularMovies()
    if (respons.data.results) {
        dispatch(setPopularMovieData(respons.data.results));
        dispatch(isFetching(false))
    }
}

export default popularReducer;