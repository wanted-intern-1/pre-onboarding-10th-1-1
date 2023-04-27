import React from 'react';
import styled from 'styled-components';

const Div = styled.section`
  width: 360px;
  height: 640px;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  gap: 48px;
  justify-content: center;
  align-items: center;
`;

// eslint-disable-next-line react/prop-types
export default function Section({ children }) {
  return <Div>{children}</Div>;
}
