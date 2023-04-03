import React from 'react'
import { string } from 'prop-types';
import styled from 'styled-components';

export function PageTitle({children}) {
  return (
    <Title>{children}</Title>
  )
}

PageTitle.propTypes = {
  children: string
}

const Title = styled.h2`
  font-size: 48px;
  text-align: center;
`;
