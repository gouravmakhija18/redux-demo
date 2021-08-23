import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { DELETE_TODO, ADD_TODO } from './actions/action';

import TodoApp from './components/Todo';

/**
 * Reducer Function
 */
function todos(state = { todos: [] }, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: state.todos.concat({
          text: action.text,
        }),
      };
    case DELETE_TODO:
      const filtered = state.todos.filter((e, index) => index !== action.index);
      return {
        todos: filtered,
      };
    default:
      return state;
  }
}

/**
 * Creating Store
 */
const store = createStore(todos);

/**
 * Wrapper Component
 */
function Todo() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default Todo;
