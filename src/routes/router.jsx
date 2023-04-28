import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Todo from '@/pages/Todo';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import { ProtectedRoute } from './ProtectedRoute';

const Router = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
      </Route>
    </Routes>
  );
};

export default Router;
