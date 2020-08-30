import { moviesApiData } from '../api/api';

const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES';
const SET_SIMILAR_MOVIE = 'SET_SIMILAR_MOVIE';
const SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
    popularMovies: null,
    similarMovie: null,
    isLoading: false,
    total_pages: 0
};

const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: action.popularMovies
            }
        case SET_SIMILAR_MOVIE:
            return {
                ...state,
                similarMovie: action.similarMovie
            }
        case SET_TOTAL_PAGES_COUNT:
            return {
                ...state,
                total_pages: action.totalPages
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
export const setSimilarMovieData = (similarMovie) => ({ type: SET_SIMILAR_MOVIE, similarMovie });
export const setTotalPagesCount = (totalPages) => ({ type: SET_TOTAL_PAGES_COUNT, totalPages });
export const isFetching = (isLoading) => ({ type: IS_FETCHING, isLoading });

export const popularMoviesThunk = (pageNumber) => async (dispatch) => {
    dispatch(isFetching(true))
    let respons = await moviesApiData.getPopularMovies(pageNumber)
    if (respons.data.results) {
        dispatch(setPopularMovieData(respons.data.results));
        dispatch(setTotalPagesCount(respons.data.total_pages))
        dispatch(isFetching(false))
    }
}

export const similarMoviesThunk = (movie_id, pageNumber) => async (dispatch) => {
    dispatch(isFetching(true))
    let respons = await moviesApiData.getSimilarMovie(movie_id, pageNumber)
    if (respons.data.results) {
        debugger
        dispatch(setSimilarMovieData(respons.data.results));
        dispatch(setTotalPagesCount(respons.data.total_pages))
        dispatch(isFetching(false))
    }
}

export default popularReducer;