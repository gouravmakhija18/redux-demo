import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MovieApp from './components'

/**
 * Lets put reducer now in separate folder name as reducer
 * 
 * Important: 
 * 1) When there is single reducer then we create store like
 * const store = createStore(reducer, initialState);  
 * 
 * but when there are multiple reducers then we include `combineReducers` function of redux library as shown below
 * 
 * const store = createStore(combineReducers({
 *    reducer 1,
 *    reducer 2
 *  }, initialState)
 * 
 * 2) We can pass initial state in reducer also intead to pass it directly while creating store
 * 
 */

import rootReducer from './reducers'

/**
 * Creating Store
 */

const store = createStore(
  rootReducer,
  // We add this line to enable redux chrome dev tool https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/**
 * Provider Wrapper Component
 */
function MovieAppWrapper() {
  return (
    <Provider store={store}>
      <MovieApp />
    </Provider>
  );
}

export default MovieAppWrapper;
