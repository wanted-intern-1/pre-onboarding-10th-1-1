import React, { useState } from 'react';
import Home from './pages/Home';
import Todo from './pages/Todo';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { AccessTokenContext } from '@/context/TokenContext';
import withAuth from './hocs/withAuth';

function App() {
  const jwt = localStorage.getItem('token');
  const [token, setToken] = useState(jwt);

  // 각 페이지 컴포넌트에 withAuth HOC를 적용하여 인증 여부를 체크
  const HomeWithAuth = withAuth(Home);
  const SignInWithAuth = withAuth(SignIn);
  const SignUpWithAuth = withAuth(SignUp);
  const TodoWithAuth = withAuth(Todo);

  return (
    <AccessTokenContext.Provider value={{ token, setToken }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<HomeWithAuth />} />
          <Route path='/signin' element={<SignInWithAuth />} />
          <Route path='/signup' element={<SignUpWithAuth />} />
          <Route path='/todo' element={<TodoWithAuth />} />
        </Routes>
      </BrowserRouter>
    </AccessTokenContext.Provider>
  );
}

export default App;
