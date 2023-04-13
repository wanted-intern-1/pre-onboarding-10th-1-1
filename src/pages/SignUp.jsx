import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { PageTitle, Footer, AuthForm } from '@/components';
import { useNavigate } from 'react-router';
import { AccessTokenContext } from '@/context/TokenContext';

export default function SignUp() {
  const {token} = useContext(AccessTokenContext)
  const navigate = useNavigate();

  useEffect(() => {
    if(token) navigate('/todo');
  }, [])

  return (
    <SignUpSection>
      <PageTitle>SignUp</PageTitle>
      <AuthForm />
      <Footer />
    </SignUpSection>
  )
}

const SignUpSection = styled.section`
  width: 360px;
  height: 640px;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 48px;
`

