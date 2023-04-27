import { useFetch } from '@/hooks';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { func, number, string } from 'prop-types';
import { getToken } from '../../utils/token';

export function DeleteTodo({ id, setReFetch }) {
  const { isLoading, status, fetchData } = useFetch();

  const clickHandler = () => {
    fetchData({
      url: `/todos/${id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  };

  useEffect(() => {
    if (status === 204) setReFetch((value) => !value);
  }, [isLoading]);

  return (
    <DeleteButton data-testid="delete-button" onClick={clickHandler}>
      ❌
    </DeleteButton>
  );
}

DeleteTodo.propTypes = {
  id: number,
  token: string,
  setReFetch: func,
};

const DeleteButton = styled.button`
  width: 30px;
`;
