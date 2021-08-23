import { ADD_TODO, DELETE_TODO } from './action';

export const addTodo = (t) => ({
  type: ADD_TODO,
  text: t,
});

export const deleteTodo = (i) => ({
  type: DELETE_TODO,
  index: i,
});
