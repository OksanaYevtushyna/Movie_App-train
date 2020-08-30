import React, { useState } from 'react';
import styles from './Paginator.module.css'


const Paginator = (props) => {
    let changePages = (e) => {
        let pageNumber = e.currentTarget.innerText;
        // switch (props) {
        //     case props.nowPlayingMoviesThunk:
        //         props.nowPlayingMoviesThunk(pageNumber);
        //         break
        //     case props.popularMoviesThunk:
        //         props.popularMoviesThunk(pageNumber);
        //         break
        //     case props.topRatedMoviesThunk:
        //         props.topRatedMoviesThunk(pageNumber)
        //         break
        //     case props.upcomingMoviesThunk:
        //         props.upcomingMoviesThunk(pageNumber);
        //         break
        //     case props.MoviesThunk:
        //         props.MoviesThunk(props.movieId, pageNumber)
        //         break
        //     default:
        //         console.log(1);
        // }

        if (props.nowPlayingMoviesThunk) {
            props.nowPlayingMoviesThunk(pageNumber)
        } else if (props.popularMoviesThunk) {
            props.popularMoviesThunk(pageNumber)
        } else if (props.topRatedMoviesThunk) {
            props.topRatedMoviesThunk(pageNumber)
        } else if (props.upcomingMoviesThunk) {
            props.upcomingMoviesThunk(pageNumber);
        } else if (props.MoviesThunk) {
            props.MoviesThunk(props.movieId, pageNumber)
        }
    }
    let pages = [];
    for (let i = 1; i <= props.totalPages; i++) {
        pages.push(i);
    }
    let portionSize = 15;
    let portionCount = Math.ceil(props.totalPages / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    let showPages = pages
        .filter(page => (page >= leftPortionPageNumber && page <= rightPortionPageNumber))
        .map((page, index) => <span onClick={changePages} key={index} >{page}</span>)

    //let showPages = pages.map((page, index) => <span key={index} onClick={changePages}>{page}</span>)
    return (
        <div className={styles.paginator}>
            {portionNumber === 1 &&
                <div>
                    {showPages}
                </div>
            }
            {portionNumber > 1 &&
                <div>
                    <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev Page</button>
                    {showPages}
                </div>
            }
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next Page</button>
            }
        </div>
    )
}


export default Paginator