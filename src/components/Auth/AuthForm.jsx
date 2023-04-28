import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch, useDebounce } from '@/hooks';
import {
  emailValidator,
  passwordValidator,
} from '@/components/utils/validator';

import styled from 'styled-components';

import { FormInput, SubmitButton } from '@/components';
import { useAuth } from '@/hooks';

export function AuthForm() {
  const location = useLocation();
  const currentPage = location.pathname === '/signup' ? 'SignUp' : 'SignIn';

  const [hint, setHint] = useState('');
  const [disabled, setDisabled] = useState(true);

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
