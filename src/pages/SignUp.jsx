import React from 'react';
import { useFetch } from '@/hooks';
import styled from 'styled-components';
import { PageTitle, Footer, AuthForm, Loading } from '@/components';
import { useNavigate } from 'react-router';

export default function SignUp() {
  const {status, error, isLoading, fetchData} = useFetch();
  const navigate = useNavigate();

  if(status === 201) navigate('/signin');

  const submitHandler = async (e) => {
    e.preventDefault();
    const userInfo = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    fetchData('/auth/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
  }

  if(isLoading) {
    return <Loading />
  }

  return (
    <SignUpSection>
      <PageTitle>SignUp</PageTitle>
      <AuthForm submitHandler={submitHandler} error={error} status={status}/>
      <Footer />
    </SignUpSection>
  )
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
`

