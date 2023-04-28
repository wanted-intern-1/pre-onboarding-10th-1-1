import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { useTodo } from '@/hooks';
import { CreateTodo, TodoItem } from '@/components';

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const { getTodos } = useTodo();
  const { data, refetch } = getTodos();

  useEffect(() => {
    setTodos(data);
  }, [data]);

  return (
    <>
      <TodoListSection>
        {todos ? (
          <List>
            {todos.map((todo) => {
              return <TodoItem key={todo.id} data={todo} refetch={refetch} />;
            })}
          </List>
        ) : null}
      </TodoListSection>
      <CreateTodo refetch={refetch} />
    </>
  );
}

TodoList.propTypes = {
  token: string,
};

const TodoListSection = styled.section`
  margin-top: 120px;
`;

const List = styled.ul`
  height: 360px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-mask-image: linear-gradient(
    180deg,
    #ffffff 70.36%,
    rgba(255, 255, 255, 0) 100.22%
  );
`;
