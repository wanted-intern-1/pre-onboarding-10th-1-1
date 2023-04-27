import React from 'react';
import styled from 'styled-components';
import { PageTitle, AuthForm, Footer } from '@/components';
import { useTitle } from '@/hooks';

export default function SignIn() {
  useTitle('SignIn | TodoList');

  return (
    <SignInSection>
      <PageTitle>SignIn</PageTitle>
      <AuthForm />
      <Footer />
    </SignInSection>
  );
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
`;
