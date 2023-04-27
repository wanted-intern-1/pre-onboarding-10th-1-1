import { getTodo } from '@/api';
import { useFetch } from './useFetch';

export const useGetTodos = () => {
  const { data } = useFetch(getTodo);

  return { data };
};
