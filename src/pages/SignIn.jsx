import React from 'react'
import { useFetch } from '@/hooks';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { PageTitle, AuthForm, Footer, Loading } from '@/components';

export default function SignIn() {
  const navigate = useNavigate();
  const {isLoading, error, data, status, fetchData} = useFetch();

  const submitHandler = (e) => {
    e.preventDefault();
    const userInfo = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    fetchData('/auth/signin', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
  }

  if(data && data.access_token) {
    localStorage.setItem('token', data.access_token);
    navigate('/todo');
  }

  if(isLoading) {
    return <Loading />;
  }

  return (
    <SignInSection>
      <PageTitle>SignIn</PageTitle>
      <AuthForm submitHandler={submitHandler} error={error} status={status}/>
      <Footer />
    </SignInSection>
  )
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
`
