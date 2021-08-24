import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';

/**
 * Initial count State
 */
const initialState = {
  count: 0
}

/**
 * Defininf Actions
 */
export const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

/**
 * Creating reducer funciton
 * Note: We can move this in a seperate file too and import it here.
 */
function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

/**
 * Creating Store and passing reducer and initial state
 * Note: 
 *   1) If there are more then one reducer then we use combineReducer method to add all reducer once in store.
 *   2) We can pass initial state in reducer function too.
 */
const store = createStore(reducer, initialState);

function ReducedCounter() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default ReducedCounter;
