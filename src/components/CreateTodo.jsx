import React from 'react'
import { useFetch } from '@/hooks';
import { FormInput, SubmitButton } from '@/components';
import { string } from 'prop-types';
import styled from 'styled-components';

export function CreateTodo({token}) {
  const {fetchData} = useFetch();

  const submitHandler = (e) => {
    e.preventDefault();
    const todo = {
      todo: e.target.createTodo.value
    };
    fetchData(`/todos`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
      body: JSON.stringify(todo)
    })
    e.target.createTodo.value = '';
  }

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
  token: string,
}

const CreateTodoForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 12px;
  position: absolute;
  bottom: 32px;
`
