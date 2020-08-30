import { moviesApiData } from '../api/api';
import { setTotalPagesCount } from './popularReducer';

const SET_NOW_PLAYING_MOVIES = 'SET_NOW_PLAYING_MOVIES';
const SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT';
const IS_LOADING = 'IS_LOADING';

let initialState = {
    nowPlayingMovies: null,
    isLoading: false,
    total_pages: 0
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
        case SET_TOTAL_PAGES_COUNT:
            return {
                ...state,
                total_pages: action.totalPages
            }
        default:
            return state;
    }
}

export const setNowPlayingMovieData = (nowPlayingMovies) => ({ type: SET_NOW_PLAYING_MOVIES, nowPlayingMovies });
export const setTotalPages = (totalPages) => ({ type: SET_TOTAL_PAGES_COUNT, totalPages });
export const setLoading = (isLoading) => ({ type: IS_LOADING, isLoading });

export const nowPlayingMoviesThunk = (pageNumber) => async (dispatch) => {
    dispatch(setLoading(true))
    let respons = await moviesApiData.getNowPlayingMovies(pageNumber)
    if (respons.data.results) {
        dispatch(setNowPlayingMovieData(respons.data.results));
        dispatch(setTotalPagesCount(respons.data.total_pages))
        dispatch(setLoading(false))
    }
}

export default nowPlayingReducer;