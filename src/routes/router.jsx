import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import Sign from '@/pages/Sign';
import Todo from '@/pages/Todo';

const Router = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/signin" element={<Sign type="SignIn" />} />
        <Route path="/signup" element={<Sign type="SignUp" />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/*" element={<Navigate to="/signin" />} />
      </Route>
    </Routes>
  );
};

export default Router;
