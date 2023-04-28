import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useDebounce, useAuth } from '@/hooks';
import { emailValidator, passwordValidator } from '@/utils/validator';
import { FormInput, SubmitButton } from '@/components';

const validationHint = {
  email: '이메일 형식에 맞게 입력해주세요.',
  password: '8자 이상 입력해주세요.',
  400: '중복된 이메일입니다.',
  401: '이메일 혹은 비밀번호를 확인해주세요.',
  404: '등록되지 않은 회원입니다.',
};

export function AuthForm() {
  const location = useLocation();
  const currentPage = location.pathname === '/signup' ? 'SignUp' : 'SignIn';

  const [hint, setHint] = useState('');

  const { submitCallback } = useAuth(currentPage);
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });
  const userData = useDebounce(userInput);

  useEffect(() => {
    setHint('');
  }, [userData]);

  const inputHandler = useCallback((e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    submitCallback({
      email: e.target.email.value,
      password: e.target.password.value,
    });
  };

  return (
    <SignUpForm onSubmit={submitHandler}>
      <FormInput
        testid="email-input"
        type="email"
        placeholder="Email"
        name="email"
        onChange={inputHandler}
        hint={
          emailValidator(userData.email)
            ? ''
            : userData.email.length === 0
            ? ''
            : validationHint.email
        }
      >
        이메일
      </FormInput>
      <FormInput
        testid="password-input"
        type="password"
        placeholder="Password"
        name="password"
        onChange={inputHandler}
        hint={
          passwordValidator(userData.password)
            ? ''
            : userData.password.length === 0
            ? ''
            : validationHint.password
        }
      >
        비밀번호
      </FormInput>
      <SubmitButton
        type="submit"
        disabled={
          !(
            emailValidator(userInput.email) &&
            passwordValidator(userInput.password) &&
            !hint
          )
        }
        testid={`${currentPage.toLowerCase()}-button`}
      >
        {currentPage}
      </SubmitButton>
      {hint ? <ValidationHint>{hint}</ValidationHint> : null}
    </SignUpForm>
  );
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
  top: 60%;
  color: #f00;
`;
