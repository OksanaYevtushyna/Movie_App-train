import * as axios from 'axios';


let instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/'
})

let ApiKey = 'afb0115d2ce3246e2691a628fcc01737'

export const moviesApiData = {
    getPopularMovies(pageNumber = 1) {
        return instance.get(`popular?api_key=${ApiKey}&language=en-US&page=${pageNumber}`)
    },
    getLatestMovies() {
        return instance.get(`latest?api_key=${ApiKey}&language=en-US`)
    },
    getUpcomingMovies(pageNumber = 1) {
        return instance.get(`upcoming?api_key=${ApiKey}&language=en-US&page=${pageNumber}`)
    },
    getNowPlayingMovies(pageNumber = 1) {
        return instance.get(`now_playing?api_key=${ApiKey}&language=en-US&page=${pageNumber}`)
    },
    getTopRatedMovies(pageNumber = 1) {
        return instance.get(`top_rated?api_key=${ApiKey}&language=en-US&page=${pageNumber}`)
    },
    getSimilarMovie(movie_id, pageNumber = 1) {
        return instance.get(`${movie_id}/similar?api_key=${ApiKey}&language=en-US&page=${pageNumber}`)
    },
    getRecommedationMovies(movie_id) {
        return instance.get(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${ApiKey}&language=en-US&page=1`)
    }
}