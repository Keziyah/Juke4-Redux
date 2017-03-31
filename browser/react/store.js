import LyricsReducer from './redux/reducers/lyricsReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import {createLogger} from 'redux-logger';
import {thunkMiddleware} from 'redux-thunk'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(LyricsReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(createLogger(), thunkMiddleware)
));

//const middlewareLogger = applyMiddleware(createLogger());

// const store = createStore(
//     LyricsReducer, /* preloadedState, */
//     +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default createStore(LyricsReducer);

export default store; 