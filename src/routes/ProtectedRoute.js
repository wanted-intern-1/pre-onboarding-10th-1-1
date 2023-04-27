import { Navigate, Outlet, useLocation } from 'react-router-dom';
import React from 'react';
import { isAuthorized } from '../utils/token';

export default function ProtectedRoute() {
  const { pathname } = useLocation();

  return isAuthorized() ? (
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
}
