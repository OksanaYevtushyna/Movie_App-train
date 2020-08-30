import { moviesApiData } from '../api/api';

const SET_TOP_RATED_MOVIES = 'SET_TOP_RATED_MOVIES';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
const IS_LOADING = 'IS_LOADING';

let initialState = {
    topRatedMovies: null,
    total_pages: 0,
    isLoading: false
};

const topRatedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_RATED_MOVIES:
            return {
                ...state,
                topRatedMovies: action.topRatedMovies
            }
        case SET_TOTAL_PAGES:
            return {
                ...state,
                total_pages: action.totalPages
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
export const setTotalPages = (totalPages) => ({ type: SET_TOTAL_PAGES, totalPages });
export const setLoading = (isLoading) => ({ type: IS_LOADING, isLoading });

export const topRatedMoviesThunk = (pageNumber) => async (dispatch) => {
    dispatch(setLoading(true))
    let respons = await moviesApiData.getTopRatedMovies(pageNumber)
    if (respons.data.results) {
        dispatch(setTopRatedMovieData(respons.data.results));
        dispatch(setTotalPages(respons.data.total_pages))
        dispatch(setLoading(false))
    }
}

export default topRatedReducer;