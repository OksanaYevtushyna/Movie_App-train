import { moviesApiData } from '../api/api';

const SET_LATEST_MOVIES = 'SET_LATEST_MOVIES';
const IS_LOADING = 'IS_LOADING';

let initialState = {
    latestMovies: null,
    isLoading: false
};

const latestReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LATEST_MOVIES:
            return {
                ...state,
                latestMovies: action.latestMovies
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

export const setLatestMovieData = (latestMovies) => ({ type: SET_LATEST_MOVIES, latestMovies });
export const setLoading = (isLoading) => ({ type: IS_LOADING, isLoading });

export const latestMoviesThunk = () => async (dispatch) => {
    dispatch(setLoading(true))
    let respons = await moviesApiData.getLatestMovies()
    if (respons.data) {
        dispatch(setLatestMovieData(respons.data));
        dispatch(setLoading(false))
    }
}

export default latestReducer;