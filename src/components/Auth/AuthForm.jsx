import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

import { useDebounce, useAuth } from '@/hooks';
import { emailValidator, passwordValidator } from '@/utils/validator';
import { FormInput, SubmitButton } from '@/components';

const validationHint = {
  email: '이메일 형식에 맞게 입력해주세요.',
  password: '8자 이상 입력해주세요.',
};

export function AuthForm() {
  const location = useLocation();
  const currentPage = location.pathname === '/signup' ? 'SignUp' : 'SignIn';

  const { submitCallback } = useAuth(currentPage);
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });
  const debouncedInput = useDebounce(userInput);

  const inputHandler = useCallback((e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    submitCallback(userInput);
  };

  const getHint = (validator, input, message) =>
    validator(input) ? '' : input.length === 0 ? '' : message;

  const emailHint = getHint(
    emailValidator,
    debouncedInput.email,
    validationHint.email
  );
  const passwordHint = getHint(
    passwordValidator,
    debouncedInput.password,
    validationHint.password
  );
  const hint = emailHint || passwordHint;

  const isButtonDisabled =
    !emailValidator(userInput.email) ||
    !passwordValidator(userInput.password) ||
    hint;

  return (
    <SignUpForm onSubmit={submitHandler}>
      <FormInput
        testid="email-input"
        type="email"
        placeholder="Email"
        name="email"
        onChange={inputHandler}
        hint={emailHint}
      >
        이메일
      </FormInput>
      <FormInput
        testid="password-input"
        type="password"
        placeholder="Password"
        name="password"
        onChange={inputHandler}
        hint={passwordHint}
      >
        비밀번호
      </FormInput>
      <SubmitButton
        type="submit"
        disabled={isButtonDisabled}
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
