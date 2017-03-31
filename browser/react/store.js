import LyricsReducer from './redux/reducers/lyricsReducer';
import PlayerReducer, {initialPlayerState} from './redux/reducers/player-reducer';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'; 

const reducer = combineReducers({
  lyrics: LyricsReducer,
  player: PlayerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(createLogger(), thunkMiddleware)
));

//const middlewareLogger = applyMiddleware(createLogger());

// const store = createStore(
//     LyricsReducer, /* preloadedState, */
//     +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default createStore(LyricsReducer);

export default store; 