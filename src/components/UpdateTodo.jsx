import { useFetch } from '@/hooks';
import styled from 'styled-components';
import { FormInput } from '@/components';
import React, { useEffect, useState } from 'react';
import { bool, func, object, string } from 'prop-types';
import { ReactComponent as CancelUpdate } from '@/assets/return.svg';
import { ReactComponent as ConfirmUpdate } from '@/assets/confirm.svg';

export function UpdateTodo({data, isChecked, token, setReFetch}) {
  const [display, setDisplay] = useState(false);
  const {isLoading, status, fetchData} = useFetch();

  const clickHandler = (e) => {
    e.preventDefault();
    setDisplay(!display);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const todo = {
      todo: e.target.updateTodo.value,
      isCompleted: isChecked
    }
    fetchData(`/todos/${data.id}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    });
    setDisplay(!display);
  }

  useEffect(() => {
    if(status === 200) setReFetch((value) => !value);
  }, [isLoading]);

  return (
    <>
      <UpdateButton onClick={clickHandler}>✏️</UpdateButton>
      {display ? 
        <InputWrapper onSubmit={submitHandler}>
          <FormInput 
            defaultValue={data.todo}
            testid="modify-input"
            type="text"
            placeholder="Edit To Do"
            name="updateTodo"
          >
            수정사항
          </FormInput>
          <button type="submit" data-testid="modify-button"><ConfirmUpdate /></button>
          <button type="button" data-testid="delete-button" onClick={clickHandler}><CancelUpdate /></button>
        </InputWrapper> : null}
    </>
  )
}

UpdateTodo.propTypes = {
  data: object,
  token: string,
  setReFetch: func,
  isChecked: bool
}

const InputWrapper = styled.form`
  order: 1;
  width: 280px;
  display: flex;
`;

const UpdateButton = styled.button`
  width: 30px;
`
