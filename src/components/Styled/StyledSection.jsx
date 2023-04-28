import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
export default function StyledSection({ children }) {
  return <Section>{children}</Section>;
}

const Section = styled.section`
  width: 360px;
  height: 640px;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 48px;
`;
