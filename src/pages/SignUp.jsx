import React from 'react';
import styled from 'styled-components';
import { useTitle } from '@/hooks';
import { AuthForm, Footer, PageTitle } from '@/components';

export default function SignUp() {
  useTitle('SignUp | TodoList');

  return (
    <SignUpSection>
      <PageTitle>SignUp</PageTitle>
      <AuthForm />
      <Footer />
    </SignUpSection>
  );
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
`;
