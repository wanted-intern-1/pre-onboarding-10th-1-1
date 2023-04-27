import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

export function Footer() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/signup' ? (
        <div>
          <span>이미 회원이신가요?</span>
          <Move to="/signin">로그인</Move>
        </div>
      ) : (
        <div>
          <span>회원이 아니신가요?</span>
          <Move to="/signup">회원가입</Move>
        </div>
      )}
    </>
  );
}

const Move = styled(Link)`
  margin-left: 8px;
  color: #fca311;
  border-bottom: 2px solid #fca311;
  font-weight: 800;
`;
