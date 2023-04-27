import React, { useState } from 'react';
import Home from './pages/Home';
import Todo from './pages/Todo';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { AccessTokenContext } from '@/context/TokenContext';

function App() {
  const jwt = localStorage.getItem('token');
  const [token, setToken] = useState(jwt);

  return (
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
  );
}

export default App;
