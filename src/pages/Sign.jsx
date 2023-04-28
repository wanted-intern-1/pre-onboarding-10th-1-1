import React from 'react';
import { useTitle } from '@/hooks';
import { AuthForm, Footer, PageTitle } from '@/components';
import StyledSection from '../components/Styled/StyledSection';

// eslint-disable-next-line react/prop-types
export default function Sign({ type }) {
  useTitle(`${type} | TodoList`);

  return (
    <StyledSection>
      <PageTitle>{type}</PageTitle>
      <AuthForm />
      <Footer />
    </StyledSection>
  );
}
