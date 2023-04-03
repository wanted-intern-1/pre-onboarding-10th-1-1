import React from 'react'
import { SubmitButton, FormInput, PageTitle } from '@/components';
import styled from 'styled-components';

export default function SignUp() {
  return (
    <SignUpForm>
      <PageTitle>SignUp</PageTitle>
      <FormInput
        testid="email-input"
        type="email"
        placeholder="Email"
        name="email"
      >
        이메일
        </FormInput>
      <FormInput
        testid="password-input"
        type="password"
        placeholder="Password"
        name="password"
      >
        비밀번호
      </FormInput>
      <FormInput
        type="password"
        placeholder="Password Confirm"
        name="password"
      >
        비밀번호 확인
      </FormInput>
      <SubmitButton type="submit" testid="signup-button">
        SignUp
      </SubmitButton>
    </SignUpForm>
  )
}

const SignUpForm = styled.form`
  background: #fff;
  width: 360px;
  height: 640px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 48px;
  align-items: center;
`;
