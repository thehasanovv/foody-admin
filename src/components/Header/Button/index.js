import styled from 'styled-components';
import React from 'react';

const BTN = styled.button`
  background: ${({ theme }) => theme.bgPrimaryButton};
  color: ${({ theme }) => theme.cPrimaryButton};
  font-size: 1.25rem;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 0.75rem;
  text-align: center;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.bgPrimaryButtonHover};
  }
`;

const Button = ({ children }) => {
  return <BTN>{children}</BTN>;
};

export default Button;
