import { signin, signup } from '@/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from './useMutaion';

const ERROR_MESSAGES = {
  400: '중복된 이메일입니다.',
  401: '이메일 혹은 비밀번호를 확인해주세요.',
  404: '등록되지 않은 회원입니다.',
};

export const useAuth = (currentPage) => {
  const navigate = useNavigate();
  const [customError, setCustomError] = useState(null);

  const onSuccess = (res) => {
    if (currentPage === 'SignUp') {
      navigate('/signin');
    } else {
      localStorage.setItem('token', res.access_token);
      navigate('/todo');
    }
  };

  const onError = (error) => {
    if (error && error.response) {
      const statusCode = error.response.status;
      const dataMessage = error.response.data.message;
      const isEnglish = /^[A-Za-z\s]+$/g.test(dataMessage);
      const message = isEnglish ? ERROR_MESSAGES[statusCode] : dataMessage;
      if (message) {
        alert(message);
        setCustomError(message);
      }
    }
  };

  const [submitCallback] = useMutation(
    currentPage === 'SignUp' ? signup : signin,
    { onSuccess, onError }
  );

  return { submitCallback, error: customError };
};
