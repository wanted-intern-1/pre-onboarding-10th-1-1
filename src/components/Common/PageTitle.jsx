import React from 'react'
import { string } from 'prop-types';
import styled, { css } from 'styled-components';

export function PageTitle({children}) {
  const currentPage = location.pathname === '/todo';

  return (
    <Title currentPage={currentPage}>{children}</Title>
  )
}

PageTitle.propTypes = {
  children: string
}

const TodoTitle = css`
  position: absolute;
  top: 52px;
`

const Title = styled.h2`
  font-size: 48px;
  text-align: center;
  ${({currentPage}) => currentPage ? TodoTitle : null}
`;
