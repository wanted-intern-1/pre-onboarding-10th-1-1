import React from 'react';
import styled from 'styled-components';
import { func, number, string } from 'prop-types';
import { useTodo } from '@/hooks';

export function DeleteTodo({ id, refetch }) {
  const { deleteTodo } = useTodo();
  const { mutate } = deleteTodo();

  const clickHandler = async () => {
    await mutate({ id });
    await refetch();
  };

  return (
    <DeleteButton data-testid="delete-button" onClick={clickHandler}>
      ❌
    </DeleteButton>
  );
}

DeleteTodo.propTypes = {
  id: number,
  token: string,
  refetch: func,
};

const DeleteButton = styled.button`
  width: 30px;
`;
