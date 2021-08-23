import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import reducer from './reducers';
import { getAllProducts } from './actions';
import ShoppingCart from './containers';

/**
 * Creating Middleware using redux-thunk
 */
const middleware = [ thunk ];

/**
 * Creating Store and passing middleware
 */
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts());

/**
 * Provider Wrapper Component
 */
function ShoppingCartWrapper() {
  return (
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  );
}

export default ShoppingCartWrapper;
