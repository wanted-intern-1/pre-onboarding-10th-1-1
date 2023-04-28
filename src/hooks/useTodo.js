import {
  getTodo as getTodoAPI,
  createTodo as createTodoAPI,
  updateTodo as updateTodoAPI,
  deleteTodo as deleteTodoAPI,
} from '@/api';
import { useFetch } from './useFetch';
import { useMutation } from './useMutaion';

export const useTodo = () => {
  const getTodos = () => {
    const { data, refetch } = useFetch(getTodoAPI);
    return { data, refetch };
  };

  const createTodo = () => {
    const [mutation] = useMutation(createTodoAPI);
    return { mutate: mutation };
  };

  const updateTodo = () => {
    const [mutation] = useMutation(updateTodoAPI);
    return { mutate: mutation };
  };

  const deleteTodo = () => {
    const [mutation] = useMutation(deleteTodoAPI);
    return { mutate: mutation };
  };

  return {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  };
};
