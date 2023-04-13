import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { PageTitle, AuthForm, Footer } from '@/components';
import { useNavigate } from 'react-router';
import { AccessTokenContext } from '@/context/TokenContext';

export default function SignIn() {
  const {token} = useContext(AccessTokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(token) navigate('/todo');
  }, [])

  return (
    <SignInSection>
      <PageTitle>SignIn</PageTitle>
      <AuthForm />
      <Footer />
    </SignInSection>
  )
}

const SignInSection = styled.section`
  width: 360px;
  height: 640px;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 48px;
  align-items: center;
`
