import { moviesApiData } from '../api/api';

const SET_UPCOMING_MOVIES = 'SET_UPCOMING_MOVIES';
const SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT';
const SET_RECOMMEDATIONS = 'SET_RECOMMEDATIONS';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
    upcomingMovies: null,
    recommedation: null,
    total_pages: 0,
    isLoading: false
};

const upcomingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies: action.upcomingMovies
            }
        case SET_TOTAL_PAGES_COUNT:
            return {
                ...state,
                total_pages: action.totalPages
            }
        case SET_RECOMMEDATIONS:
            return {
                ...state,
                recommedation: action.recommedationMovie
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
export const setTotalPagesCount = (totalPages) => ({ type: SET_TOTAL_PAGES_COUNT, totalPages });
export const setRecommedationMovie = (recommedationMovie) => ({ type: SET_RECOMMEDATIONS, recommedationMovie });
export const isFetching = (isLoading) => ({ type: IS_FETCHING, isLoading });

export const upcomingMoviesThunk = (pageNumber) => async (dispatch) => {
    dispatch(isFetching(true))
    let respons = await moviesApiData.getUpcomingMovies(pageNumber)
    if (respons.data.results) {
        dispatch(setUpcomingMovieData(respons.data.results));
        dispatch(setTotalPagesCount(respons.data.total_pages))
        dispatch(isFetching(false))
    }
}

export const recommedationMoviesThunk = (movieId) => async (dispatch) => {
    dispatch(isFetching(true))
    let respons = await moviesApiData.getRecommedationMovies(movieId)
    if (respons.data.results) {
        dispatch(setRecommedationMovie(respons.data.results));
        dispatch(isFetching(false))
    }
}

export default upcomingReducer;