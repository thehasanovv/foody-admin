import styled from "styled-components";

const Btn = styled.button`
  /* background: ${({ theme }) => theme.bgPrimaryButton}; */
  color: ${({ theme }) => theme.cPrimaryButton};
  font-size: ${({ theme }) => theme.font.size.extraSmall};
  width: ${({ width }) => (width ? `${width}%` : "auto")};
  background: ${({ bgColor }) => (bgColor ? bgColor : "#C035A2")};
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

  &:hover {
    background: ${({ theme }) => theme.bgPrimaryButtonHover};
  }
`;

const Button = ({ children, width, ...rest }) => {
  return (
    <Btn width={width} {...rest}>
      {children}
    </Btn>
  );
};

export default Button;
