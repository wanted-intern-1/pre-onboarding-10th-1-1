import React from 'react';
import { PageTitle, AuthForm, Footer } from '@/components';
import { useTitle } from '@/hooks';
import Section from '../components/Common/Section';

// eslint-disable-next-line react/prop-types
export default function Sign({ type }) {
  useTitle(`${type} | TodoList`);

  return (
    <Section>
      <PageTitle>{type}</PageTitle>
      <AuthForm />
      <Footer />
    </Section>
  );
}
