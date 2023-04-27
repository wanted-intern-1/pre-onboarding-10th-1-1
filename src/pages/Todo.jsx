import React from 'react';
import { PageTitle, TodoList } from '@/components';
import { useTitle } from '@/hooks';
import Section from '../components/Common/Section';

export default function Todo() {
  useTitle('TodoList');

  return (
    <Section>
      <PageTitle>Todo List</PageTitle>
      <TodoList />
    </Section>
  );
}
