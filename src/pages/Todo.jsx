import React, { useContext, useEffect } from 'react';
import { PageTitle, TodoList } from '@/components';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { AccessTokenContext } from '@/context/TokenContext';
import { useTitle } from '@/hooks';

export default function Todo() {
  useTitle('TodoList');

  return (
    <TodoSection>
      <PageTitle>Todo List</PageTitle>
      <TodoList />
    </TodoSection>
  );
}

const TodoSection = styled.section`
  width: 360px;
  height: 640px;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  gap: 48px;
  align-items: center;
  position: relative;
`;
