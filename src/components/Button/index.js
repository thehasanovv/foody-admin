import styled from "styled-components";
import React from "react";

const Btn = styled.button`
  color: ${({ theme }) => theme.cPrimaryButton};
  font-size: ${({ theme }) => theme.font.size.extraSmall};
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 0.87rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.25px;
  cursor: pointer;
  /* border: 2px solid #c035a2; */
  box-shadow: 0px 4px 4px rgba(39, 174, 96, 0.2);
  transition: all 0.3s linear;
  width: ${({ width }) => (width ? `${width}%` : "auto")};
  background: ${({ bgColor }) => (bgColor ? bgColor : "#C035A2")};

  &:hover {
    background: ${({ theme }) => theme.bgPrimaryButtonHover};
  }
`;

const Button = ({ width, bgColor, children, ...rest }) => {
  return (
    <Btn width={width} bgColor={bgColor} {...rest}>
      {children}
    </Btn>
  );
};

export default Button;
