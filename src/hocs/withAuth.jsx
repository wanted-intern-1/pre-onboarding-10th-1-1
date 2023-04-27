import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// 사용자의 토큰 정보를 가져와 로그인한 사용자만 접근할 수 있는 페이지를 보호
const withAuth = (Component) => {
  const WrappedComponent = (props) => {
    const { pathname } = useLocation();
    const token = localStorage.getItem('token');

    if (token && (pathname === '/signup' || pathname === '/signin')) {
      return <Navigate to="/todo" replace />;
    } else if (!token && !(pathname === '/signup' || pathname === '/signin')) {
      return <Navigate to="/signin" replace />;
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default withAuth;
