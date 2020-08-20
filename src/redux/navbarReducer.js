
let initialState = {
    navbarListData: [
        { id: 1, linkName: 'Main', linkPath: '/main' },
        { id: 2, linkName: 'Popular Movies', linkPath: '/popular' },
        { id: 3, linkName: 'Latest Movies', linkPath: '/latest' },
        { id: 4, linkName: 'Upcoming Movies', linkPath: '/upcoming' },
        { id: 5, linkName: 'Now Playing Movies', linkPath: '/now_playing' },
        { id: 6, linkName: 'Top Rated Movies', linkPath: '/top_rated' }
    ]
};

export const navbarReducer = (state = initialState, action) => {


    return state;
}