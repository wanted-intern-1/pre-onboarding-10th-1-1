import React, { useState } from 'react';
import { bool, func, object } from 'prop-types';
import styled from 'styled-components';

import { FormInput } from '@/components';
import { useTodo } from '@/hooks';
import { ReactComponent as ConfirmUpdate } from '@/assets/confirm.svg';
import { ReactComponent as CancelUpdate } from '@/assets/return.svg';

export function UpdateTodo({ data, isChecked, refetch }) {
  const [display, setDisplay] = useState(false);
  const { updateTodo } = useTodo();
  const { mutate } = updateTodo();

  const clickHandler = () => setDisplay(!display);

  const submitHandler = async (e) => {
    e.preventDefault();

    await mutate({
      id: data.id,
      todo: e.target.updateTodo.value,
      isCompleted: isChecked,
    });
    await refetch();

    setDisplay(!display);
  };

  return (
    <>
      <UpdateButton data-testid="modify-button" onClick={clickHandler}>
        ✏️
      </UpdateButton>
      {display ? (
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
          <button type="submit" data-testid="submit-button">
            <ConfirmUpdate />
          </button>
          <button
            type="button"
            data-testid="cancel-button"
            onClick={clickHandler}
          >
            <CancelUpdate />
          </button>
        </InputWrapper>
      ) : null}
    </>
  );
}

UpdateTodo.propTypes = {
  data: object,
  refetch: func,
  isChecked: bool,
};

const InputWrapper = styled.form`
  order: 1;
  width: 280px;
  display: flex;
`;

const UpdateButton = styled.button`
  width: 30px;
`;
