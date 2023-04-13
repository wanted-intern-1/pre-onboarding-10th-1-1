import { useFetch } from '@/hooks';
import styled from 'styled-components';
import React, { useContext, useEffect } from 'react';
import { func, number, string } from 'prop-types';
import { AccessTokenContext } from '@/context/TokenContext';

export function DeleteTodo({ id, setReFetch }) {
  const {isLoading, status, fetchData} = useFetch();
  const {token} = useContext(AccessTokenContext);

  const clickHandler = () => {
    fetchData({
      url: `/todos/${id}`,
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
    <DeleteButton data-testid="delete-button" onClick={clickHandler}>❌</DeleteButton>
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
