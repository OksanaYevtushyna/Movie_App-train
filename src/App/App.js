import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Main from '../MainContent/Content';
import Footer from '../Footer/Footer';
import styles from './App.module.css'
import { BrowserRouter, Route } from 'react-router-dom';
import PopularMovieContainer from '../MainContent/PopularMovie/PopularMovieContainer';
import { Provider } from 'react-redux';
import store from '../redux/redux-store';
import LatestMovieContainer from '../MainContent/LatestMovie/LatestMovieContainer';
import UpcomingMovieContainer from '../MainContent/UpcomingMovie/UpcomingMovieContainer';
import NowPlayingMovieContainer from '../MainContent/NowPlaying/NowPlayingMovieContainer';
import TopRatedMovieContainer from '../MainContent/TopRatedMovie/TopRatedMovieContainer';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={styles.wrapper}>
          <Header />
          <Navbar />
          <div className={styles.Main}>
            <Route path='/main' component={Main} />
            <Route path='/popular' component={PopularMovieContainer} />
            <Route path='/latest' component={LatestMovieContainer} />
            <Route path='/upcoming' component={UpcomingMovieContainer} />
            <Route path='/now_palying' component={NowPlayingMovieContainer} />
            <Route path='/top_rated' component={TopRatedMovieContainer} />
          </div>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;



