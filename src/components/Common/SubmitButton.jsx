import { bool, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export function SubmitButton({
  type,
  testid,
  children,
  disabled = true,
  ...restProps
}) {
  return (
    <Button type={type} data-testid={testid} disabled={disabled} {...restProps}>
      {children}
    </Button>
  );
}

SubmitButton.propTypes = {
  type: string,
  testid: string,
  children: string,
  disabled: bool,
};

const Button = styled.button`
  font-size: 24px;
  background-color: #fca311;
  width: 280px;
  height: 72px;
  cursor: pointer;
  border-radius: 8px;

  &:disabled {
    background-color: #adb5bd;
    color: #fff;
    cursor: not-allowed;
  }
`;
