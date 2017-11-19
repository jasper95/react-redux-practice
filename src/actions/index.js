import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';

export const fetchTodos = (filter) => {
  return {
    filter,
    type: 'FETCH_TODOS_REQUEST'
  }
};

export const addTodo = (text) => (dispatch) =>
  api.addTodo(text).then(response => {
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      response: normalize(response, schema.todo),
    });
  });

export const toggleTodo = (id) => (dispatch) =>
  api.toggleTodo(id).then(response => {
    dispatch({
      type: 'TOGGLE_TODO_SUCCESS',
      response: normalize(response, schema.todo),
    });
  });
