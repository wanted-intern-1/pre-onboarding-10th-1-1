import React from 'react';
import styled from 'styled-components';
import { useTitle } from '@/hooks';
import { PageTitle, TodoList } from '@/components';

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
