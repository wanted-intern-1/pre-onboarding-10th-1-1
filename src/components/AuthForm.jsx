import { bool, func } from 'prop-types';
import styled from 'styled-components';
import { FormInput, SubmitButton } from '@/components';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const initialFormState = {
  email: '',
  password: '',
  passwordConfirm: ''
};

export function AuthForm({submitHandler, error}) {
  const location = useLocation();
  const navigate = useNavigate();
  const formRef = useRef(initialFormState);
  const [hint, setHint] = useState('');
  const [disabled, setDisabled] = useState(true);
  const currentPage = location.pathname === '/signup' ? 'SignUp' : 'SignIn';

  useEffect(() => {
    if(localStorage.getItem('token')) navigate('/todo');
    if(error) setHint('이메일 혹은 비밀번호를 확인해주세요.');
  }, []);

  const setValue = (name, value) => {
    formRef.current[name] = value;
    setHint('');
  }

  const resetValue = (name, hint) => {
    formRef.current[name] = '';
    setHint(hint);
  }

  const inputHandler = (e) => {
    const {name, value} = e.target;
    switch (name) {
      case 'email':
        if(value.includes('@')) setValue(name, value);
        else resetValue(name, '이메일 형식에 맞게 입력해주세요.')
        break;
      case 'password':
        if(value.length >= 8) setValue(name, value);
        else resetValue(name, '8자 이상 입력해주세요.')
        break;
      case 'passwordConfirm':
        if(Object.is(formRef.current.password, value)) setValue(name, value);
        else resetValue(name, '비밀번호가 일치하지 않습니다.')
        break;
    }
    if(formRef.current.email && formRef.current.password) setDisabled(false);
    else setDisabled(true);
  }

  return (
    <SignUpForm onSubmit={submitHandler}>
      <FormInput testid="email-input" type="email" placeholder="Email" name="email" onInput={inputHandler}>
        이메일
      </FormInput>
      <FormInput testid="password-input" type="password" placeholder="Password" name="password" onInput={inputHandler}>
        비밀번호
      </FormInput>
      {hint ? <ValidationHint>{hint}</ValidationHint> : null}
      <SubmitButton type="submit" disabled={disabled} testid={`${currentPage.toLowerCase()}-button`}>
        {currentPage}
      </SubmitButton>
    </SignUpForm>
  )
}

AuthForm.propTypes = {
  submitHandler: func,
  error: bool
};

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
  color: #F00;
`
