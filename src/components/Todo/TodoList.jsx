import { useFetch } from '@/hooks';
import { string } from 'prop-types';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { TodoItem, CreateTodo } from '@/components';

export function TodoList({token}) {
  const {data, fetchData} = useFetch(); 
  const [reFetch, setReFetch] = useState(false);

  useEffect(() => {
    fetchData('/todos', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  }, [reFetch]);

  return (
    <>
      <TodoListSection>
      {
        data ? 
          <ul>
            {data.map((todo) => {
              return <TodoItem key={todo.id} data={todo} token={token} setReFetch={setReFetch}/>
            })}
          </ul>
        : 
        null
      }
      </TodoListSection>
      <CreateTodo token={token} setReFetch={setReFetch}/>
    </>
  )
}

TodoList.propTypes = {
  token: string,
}

const TodoListSection = styled.section`
  margin-top: 120px;
`
