// import axios from 'axios'

// export default (method= 'GET', data, url) => {
// 	let username = 'drumbi',
// 		password = 'F0nch3rt0'
	
// 	return axios({
// 		auth: {
// 			username,
// 			password
// 		},
// 		method,
// 		data,
// 		url
// 	})
// }
import { v4 } from 'node-uuid';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  todos: [{
    id: v4(),
    text: 'hey',
    completed: true,
  }, {
    id: v4(),
    text: 'ho',
    completed: true,
  }, {
    id: v4(),
    text: 'let’s go',
    completed: false,
  }],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
  delay(500).then(() => {
    switch (filter) {
      case 'all':
        return { response: fakeDatabase.todos };
      case 'active':
        return { response: fakeDatabase.todos.filter(t => !t.completed) };
      case 'completed':
        return { response: fakeDatabase.todos.filter(t => t.completed) };
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  }).catch(error => ({ error }));

export const addTodo = (text) =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false,
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });

export const toggleTodo = (id) =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });