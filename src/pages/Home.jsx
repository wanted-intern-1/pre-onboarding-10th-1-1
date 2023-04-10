import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Home() {
  const token = localStorage.getItem('access_token');
  const navigate = useNavigate();

  useEffect(() => {
    if(token) navigate('/todo');
    else navigate('/signin');
  });

  return ;
}

