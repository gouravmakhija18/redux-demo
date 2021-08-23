import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';

const initialState = {
  count: 0
}

export const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

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

const store = createStore(reducer, initialState);

function ReducedCounter() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default ReducedCounter;