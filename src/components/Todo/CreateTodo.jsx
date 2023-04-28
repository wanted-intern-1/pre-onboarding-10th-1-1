import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

import { useCreateTodo } from '@/hooks';
import { FormInput, SubmitButton } from '@/components';

export function CreateTodo({ refetch }) {
  const { createTodo } = useCreateTodo();

  const submitHandler = async (e) => {
    e.preventDefault();

    await createTodo({ todo: e.target.createTodo.value });
    e.target.createTodo.value = '';
    await refetch();
  };

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
      <SubmitButton type="submit" testid="new-todo-add-button" disabled={false}>
        Add Todo
      </SubmitButton>
    </CreateTodoForm>
  );
}

CreateTodo.propTypes = {
  refetch: func,
};

const CreateTodoForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 12px;
  position: absolute;
  bottom: 32px;
`;
