import React from 'react';
import { useInput } from '@/hooks';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { FormInput, SubmitButton } from '@/components';

export function AuthForm() {
  const location = useLocation();
  const email = useInput();
  const password = useInput();

  const submitHandler = async (e) => {
    console.log(e.target.email.value);
    e.preventDefault();
    const userInfo = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    const res = await fetch('https://www.pre-onboarding-selection-task.shop/auth/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    const data = await res;
    console.log(data.status);
  }

  return (
    <SignUpForm onSubmit={submitHandler}>
      <FormInput testid="email-input" type="email" placeholder="Email" name="email" onChange={email.onInputChange}>
        이메일
      </FormInput>
      {email.isValid ? null : <ValidationHint>{email.hint}</ValidationHint>}
      <FormInput testid="password-input" type="password" placeholder="Password" name="password" onChange={password.onInputChange}>
        비밀번호
      </FormInput>
      {password.isValid ? null : <ValidationHint>{password.hint}</ValidationHint>}
      {
        location.pathname === '/signup' ? 
        <FormInput type="password" placeholder="PasswordConfirm" name="passwordConfirm">
          비밀번호 확인
        </FormInput> 
        :
        null
      }
      {location.pathname === '/signup' ?
        <SubmitButton type="submit" disabled={!email.isValid || !password.isValid} testid="signup-button">
          SignUp
        </SubmitButton>
        :
        <SubmitButton type="submit" disabled={!email.isValid || !password.isValid} testid="signin-button">
          SignIn
        </SubmitButton>
      }
      
    </SignUpForm>
  )
}

const SignUpForm = styled.form`
  background: #fff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 48px;
  align-items: center;
  position: relative;
`;

const ValidationHint = styled.span`
  position: absolute;
  color: #F00;
  top: 70%;
`
