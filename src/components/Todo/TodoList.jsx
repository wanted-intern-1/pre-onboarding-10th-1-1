import { useFetch } from '@/hooks';
import { string } from 'prop-types';
import styled from 'styled-components';
import { TodoItem, CreateTodo } from '@/components';
import { AccessTokenContext } from '@/context/TokenContext';
import React, { useContext, useEffect, useState } from 'react';

export function TodoList() {
  const {data, fetchData} = useFetch(); 
  const [reFetch, setReFetch] = useState(false);
  const {token} = useContext(AccessTokenContext);

  useEffect(() => {
    fetchData({
      url: '/todos',
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
          <List>
            {data.map((todo) => {
              return <TodoItem key={todo.id} data={todo} setReFetch={setReFetch}/>
            })}
          </List>
        : 
        null
      }
      </TodoListSection>
      <CreateTodo setReFetch={setReFetch}/>
    </>
  )
}

TodoList.propTypes = {
  token: string,
}

const TodoListSection = styled.section`
  margin-top: 120px;
`

const List = styled.ul`
  height: 360px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-mask-image: linear-gradient(180deg, #FFFFFF 70.36%, rgba(255, 255, 255, 0) 100.22%);
`
