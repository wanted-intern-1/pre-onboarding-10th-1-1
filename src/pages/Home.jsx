import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AccessTokenContext } from '@/context/TokenContext';

export default function Home() {
  const { token } = useContext(AccessTokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate('/todo');
    else navigate('/signin');
  }, []);

  return;
}
