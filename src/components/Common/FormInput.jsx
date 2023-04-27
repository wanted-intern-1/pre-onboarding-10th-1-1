import React, { useId } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

export function FormInput({
  testid,
  type,
  children,
  placeholder,
  name,
  width = '240px',
  ...restProps
}) {
  const id = useId();

  return (
    <>
      <A11yHidden htmlFor={id}>{children}</A11yHidden>
      <Input
        width={width}
        data-testid={testid}
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        {...restProps}
      />
    </>
  );
}

FormInput.propTypes = {
  testid: string,
  type: string,
  children: string,
  placeholder: string,
  name: string,
  width: string,
};

const Input = styled.input`
  padding-left: 8px;
  width: ${(props) => props.width};
  height: 32px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 16px;
`;

const A11yHidden = styled.label`
  overflow: hidden;
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;

  &:focus {
    position: static;
    clip: auto;
    clip-path: unset;
    width: initial;
    height: initial;
    margin: initial;
    border: initial;
    padding: initial;
    white-space: initial;
  }
`;
