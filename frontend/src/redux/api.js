import axios from 'axios';

const url = 'http://127.0.0.1:8000';

export const fetchTodos = () => axios.get(`${url}/todos`);
export const addTodo = (todo) => axios.post(`${url}/todos`, todo);