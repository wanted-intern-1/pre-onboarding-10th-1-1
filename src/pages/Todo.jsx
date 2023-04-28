import React from 'react';
import { useTitle } from '@/hooks';
import { PageTitle, TodoList } from '@/components';
import { StyledSection } from '../components/Styled/StyledSection';

export default function Todo() {
  useTitle('TodoList');

  return (
    <StyledSection>
      <PageTitle>Todo List</PageTitle>
      <TodoList />
    </StyledSection>
  );
}
