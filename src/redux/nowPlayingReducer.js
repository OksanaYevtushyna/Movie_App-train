import { moviesApiData } from '../api/api';

const SET_NOW_PLAYING_MOVIES = 'SET_NOW_PLAYING_MOVIES';
const IS_LOADING = 'IS_LOADING';

let initialState = {
    nowPlayingMovies: null,
    isLoading: false
};

const nowPlayingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOW_PLAYING_MOVIES:
            return {
                ...state,
                nowPlayingMovies: action.nowPlayingMovies
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

export const setNowPlayingMovieData = (nowPlayingMovies) => ({ type: SET_NOW_PLAYING_MOVIES, nowPlayingMovies });
export const setLoading = (isLoading) => ({ type: IS_LOADING, isLoading });

export const nowPlayingMoviesThunk = () => async (dispatch) => {
    dispatch(setLoading(true))
    let respons = await moviesApiData.getNowPlayingMovies()
    if (respons.data.results) {
        dispatch(setNowPlayingMovieData(respons.data.results));
        dispatch(setLoading(false))
    }
}

export default nowPlayingReducer;