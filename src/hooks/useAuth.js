import { useNavigate } from 'react-router-dom';

import { signin, signup } from '@/api';
import { useMutation } from './useMutation';

export const useAuth = (currentPage) => {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    if (currentPage === 'SignUp') {
      navigate('/signin');
    } else {
      localStorage.setItem('token', res.access_token);
      navigate('/todo');
    }
  };

  const [submitCallback] = useMutation(
    currentPage === 'SignUp' ? signup : signin,
    { onSuccess }
  );

  return { submitCallback };
};
