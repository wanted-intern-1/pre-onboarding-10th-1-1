import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { AccessTokenContext } from '@/context/TokenContext';

const Home = lazy(() => import('./pages/Home'));
const Todo = lazy(() => import('./pages/Todo'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const { Loading } = lazy(() => import('@/components'));

function App() {
  const jwt = localStorage.getItem('token');
  const [token, setToken] = useState(jwt);

  return (
    <Suspense fallback={Loading}>
      <AccessTokenContext.Provider value={{ token, setToken }}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </AccessTokenContext.Provider>
    </Suspense>
  );
}

export default App;
