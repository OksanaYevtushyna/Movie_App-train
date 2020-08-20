import * as axios from 'axios';


let instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/'
})

let ApiKey = 'afb0115d2ce3246e2691a628fcc01737'

export const moviesApiData = {
    getPopularMovies() {
        return instance.get(`popular?api_key=${ApiKey}&language=en-US&page=1`)
    },
    getLatestMovies() {
        return instance.get(`latest?api_key=${ApiKey}&language=en-US`)
    },
    getUpcomingMovies() {
        return instance.get(`upcoming?api_key=${ApiKey}&language=en-US&page=1`)
    },
    getNowPlayingMovies() {
        return instance.get(`now_playing?api_key=${ApiKey}&language=en-US&page=1`)
    },
    getTopRatedMovies() {
        return instance.get(`top_rated?api_key=${ApiKey}&language=en-US&page=1`)
    }
}