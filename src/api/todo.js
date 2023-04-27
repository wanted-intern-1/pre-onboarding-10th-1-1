import { client } from './client';

export const createTodo = async (todo) => {
  return await client.post('/todos', todo);
};

export const getTodo = async () => {
  return await client.get('/todos');
};

export const updateTodo = async (id, todo) => {
  return await client.put(`/todos/${id}`, todo);
};

export const deleteTodo = async (id) => {
  return await client.delete(`/todos/${id}`);
};
