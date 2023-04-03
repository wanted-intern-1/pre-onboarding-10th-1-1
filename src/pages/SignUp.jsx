import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import { SubmitButton, FormInput, PageTitle } from '@/components';

const initialFormState = {
  email: '',
  password: '',
  passwordConfirm: ''
};

const hintList = {
  email: '이메일 형식에 맞게 입력해주세요.',
  password: '8자 이상 입력해주세요.',
  passwordConfirm: '비밀번호가 일치하지 않습니다.'
}

export default function SignUp() {
  const formStateRef = useRef(initialFormState);
  const [hint, setHint] = useState('');
  const [disabled, setDisabled] = useState(true);
  const isEmaliValid = (value) => value.includes('@');
  const isPasswordValid = (value) => value.length >= 8;
  const isPasswordConfirmValid = (value) => formStateRef.current.password === value;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formStateRef.current);
  }
  
  const handleInput = (e) => {
    const {name, value} = e.target;
    const {email, password, passwordConfirm} = formStateRef.current;
    switch (name) {
      case 'email':
        if(isEmaliValid(value)) {
          formStateRef.current[name] = value;
          setHint('');
        }
        else setHint(hintList[name]);
        break;
      case 'password':
        if(isPasswordValid(value)) {
          formStateRef.current[name] = value;
          setHint('');
        }
        else setHint(hintList[name]);
        break;
      case 'passwordConfirm':
        if(isPasswordConfirmValid(value)) {
          formStateRef.current[name] = value;
          setHint('');
        }
        else setHint(hintList[name]);
        break;
    }
    if(email && password && passwordConfirm)
      setDisabled(false);
  }

  return (
    <SignUpForm onSubmit={submitHandler}>
      <PageTitle>SignUp</PageTitle>
      <FormInput testid="email-input" type="email" placeholder="Email" name="email" onChange={handleInput}>
        이메일
      </FormInput>
      <FormInput testid="password-input" type="password" placeholder="Password" name="password" onChange={handleInput}>
        비밀번호
      </FormInput>
      <FormInput type="password" placeholder="PasswordConfirm" name="passwordConfirm" onChange={handleInput}>
        비밀번호 확인
      </FormInput>
      <SubmitButton type="submit" disabled={disabled} testid="signup-button">
        SignUp
      </SubmitButton>
      <ValidationHint>{hint}</ValidationHint>
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
  position: relative;
`;

const ValidationHint = styled.p`
  position: absolute;
  color: #F00;
  top: 70%;
`