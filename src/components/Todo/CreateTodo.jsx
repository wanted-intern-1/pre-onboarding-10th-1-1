import { useFetch } from '@/hooks';
import styled from 'styled-components';
import React, { useContext, useEffect } from 'react';
import { func } from 'prop-types';
import { FormInput, SubmitButton } from '@/components';
import { AccessTokenContext } from '@/context/TokenContext';

export function CreateTodo({ setReFetch }) {
  const {isLoading, status, fetchData} = useFetch();
  const {token} = useContext(AccessTokenContext);

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData({
      url: '/todos',
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
      data: {
        todo: e.target.createTodo.value
      }
    })
    e.target.createTodo.value = '';
  }

  useEffect(() => {
    if(status === 201) setReFetch((value) => !value);
  }, [isLoading])

  return (
    <CreateTodoForm onSubmit={submitHandler}>
      <FormInput 
        testid="new-todo-input"
        type="text"
        placeholder="Write what you want to do"
        name="createTodo"
      >
        Add Todo
      </FormInput>
      <SubmitButton 
        type="submit"
        testid="new-todo-add-button"
        disabled={false}
      >
        Add Todo
      </SubmitButton>
    </CreateTodoForm>
  )
}

CreateTodo.propTypes = {
  setReFetch: func
}

const CreateTodoForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 12px;
  position: absolute;
  bottom: 32px;
`
