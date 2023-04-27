import { useNavigate } from 'react-router-dom';

import { signin } from '@/api';
import { useMutation } from '../useMutaion';

export const useLogin = () => {
  const navigate = useNavigate();

  const [submitCallback] = useMutation(signin, {
    onSuccess: (res) => {
      console.log('res: >> ', res);
      localStorage.setItem('token', res.access_token);
      navigate('/todo');
    },
  });

  return { submitCallback };
};
