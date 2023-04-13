import { useFetch } from '@/hooks';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { func, number, string } from 'prop-types';

export function DeleteTodo({ id, token, setReFetch }) {
  const {isLoading, status, fetchData} = useFetch();

  const clickHandler = () => {
    fetchData(`/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
  }

  useEffect(() => {
    if(status === 204) setReFetch((value) => !value);
  }, [isLoading])

  return (
    <DeleteButton onClick={clickHandler}>❌</DeleteButton>
  )
}

DeleteTodo.propTypes = {
  id: number,
  token: string,
  setReFetch: func
};

const DeleteButton = styled.button`
  width: 30px;
`
