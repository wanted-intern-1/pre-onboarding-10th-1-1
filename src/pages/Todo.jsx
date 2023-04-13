import React, { useEffect } from 'react'
import { PageTitle, TodoList } from '@/components';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

export default function Todo() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if(!token) navigate('/signin');
  }, [])

  return (
    <TodoSection>
      <PageTitle>Todo List</PageTitle>
      <TodoList token={token} />
    </TodoSection>
  )
}

const TodoSection = styled.section`
  width: 360px;
  height: 640px;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  gap: 48px;
  align-items: center;
  position: relative;
`
