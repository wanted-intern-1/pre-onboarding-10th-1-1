import styled from 'styled-components';
import React, { useId, useState } from 'react';
import { func, object } from 'prop-types';
import { UpdateTodo, DeleteTodo } from '@/components';
import { useCallback } from 'react';
import { useEffect } from 'react';

export function TodoItem({data, setReFetch}) {
  const id = useId();
  const [isChecked, setIsChecked] = useState(data.isCompleted);

  const completeHandler = useCallback( () => {
    setIsChecked((value) => !value);
  },[setIsChecked])

  return (
    <Item>
      <input type="checkbox" name="complete" id={id} checked={isChecked} onChange={completeHandler}/>
      <Todo htmlFor={id} name="complete">{data.todo}</Todo>
      <UpdateTodo data={data} isChecked={isChecked} setReFetch={setReFetch}/>
      <DeleteTodo id={data.id} setReFetch={setReFetch} />
    </Item>
  )
}

TodoItem.propTypes = {
  data: object,
  setReFetch: func
}

const Item = styled.li`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 280px;
  background-color: #fff;
  font-size: 24px;
`

const Todo = styled.label`
  flex-grow: 1;
  max-width: 200px;
  word-break: break-all;
  padding-left: 8px;
`

