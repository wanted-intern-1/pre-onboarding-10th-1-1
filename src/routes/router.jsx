import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import Todo from '@/pages/Todo';

const Router = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/*" element={<Navigate to="/signin" />} />
      </Route>
    </Routes>
  );
};

export default Router;
