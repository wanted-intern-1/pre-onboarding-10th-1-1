import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FormInput, SubmitButton } from '@/components';
import validateInput from '@/utils/validator';
import { useAuth } from '@/hooks';

const initialFormState = {
  email: '',
  password: '',
  passwordConfirm: '',
};

// const validationHint = {
//   email: '이메일 형식에 맞게 입력해주세요.',
//   password: '8자 이상 입력해주세요.',
//   400: '중복된 이메일입니다.',
//   401: '이메일 혹은 비밀번호를 확인해주세요.',
//   404: '등록되지 않은 회원입니다.',
// };

export function AuthForm() {
  const location = useLocation();
  const currentPage = location.pathname === '/signup' ? 'SignUp' : 'SignIn';

  const formRef = useRef(initialFormState);
  const [hint, setHint] = useState('');
  const [disabled, setDisabled] = useState(true);

  const { submitCallback } = useAuth(currentPage);

  const setValue = (name, value) => {
    formRef.current[name] = value;
    setHint('');
  };

  const resetValue = (name, hint) => {
    formRef.current[name] = '';
    setHint(hint);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    const { isValid, msg } = validateInput[name](value);

    isValid ? setValue(name, value) : resetValue(name, msg);

    if (formRef.current.email && formRef.current.password) setDisabled(false);
    else setDisabled(true);
  };

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
        onInput={inputHandler}
      >
        이메일
      </FormInput>
      <FormInput
        testid="password-input"
        type="password"
        placeholder="Password"
        name="password"
        onInput={inputHandler}
      >
        비밀번호
      </FormInput>
      {hint ? <ValidationHint>{hint}</ValidationHint> : null}
      <SubmitButton
        type="submit"
        disabled={disabled}
        testid={`${currentPage.toLowerCase()}-button`}
      >
        {currentPage}
      </SubmitButton>
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
