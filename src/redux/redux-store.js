import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { navbarReducer } from "./navbarReducer";
import thunkMiddleware from 'redux-thunk';
import popularReducer from './popularReducer'
import latestReducer from './latestReducer';
import upcomingReducer from './upcomingReducer';
import nowPlayingReducer from './nowPlayingReducer';
import topRatedReducer from './topRatedReducer';


let reducers = combineReducers({
    popularReducer, navbarReducer, latestReducer, upcomingReducer, nowPlayingReducer, topRatedReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;