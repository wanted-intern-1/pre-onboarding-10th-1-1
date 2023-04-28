import React from 'react';
import { useTitle } from '@/hooks';
import { AuthForm, Footer, PageTitle } from '@/components';
import { StyledSection } from '../components/Styled/StyledSection';

export default function Sign({ type }) {
  useTitle(`${type} | TodoList`);

  return (
    <StyledSection>
      <PageTitle>SignUp</PageTitle>
      <AuthForm />
      <Footer />
    </StyledSection>
  );
}

Sign.propTypes = {
  type: String,
};
