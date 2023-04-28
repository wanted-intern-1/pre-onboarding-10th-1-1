import { getTodo, createTodo, updateTodo, deleteTodo } from '@/api';
import { useFetch } from './useFetch';
import { useMutation } from './useMutaion';

export const useGetTodos = () => {
  const { data, refetch } = useFetch(getTodo);
  return { data, refetch };
};

export const useCreateTodo = () => {
  const [createTodoMutation] = useMutation(createTodo);
  return { createTodo: createTodoMutation };
};

export const useUpdateTodo = () => {
  const [updateTodoMutation] = useMutation(updateTodo);
  return { updateTodo: updateTodoMutation };
};

export const useDeleteTodo = () => {
  const [deleteTodoMutation] = useMutation(deleteTodo);
  return { deleteTodo: deleteTodoMutation };
};
