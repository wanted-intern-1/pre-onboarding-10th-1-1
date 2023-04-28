import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const isAuthorized = localStorage.getItem('token');

  return isAuthorized ? (
    pathname === '/todo' ? (
      <Outlet />
    ) : (
      <Navigate to="/todo" />
    )
  ) : pathname === '/signin' || pathname === '/signup' ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" />
  );
};
