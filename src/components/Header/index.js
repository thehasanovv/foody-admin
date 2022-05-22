import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
import User from "./User";
import Lang from "./Lang";

const Header = () => {
  return (
    <ContainerHeader>
      <Logo />
      <Button>ADD PRODUCT</Button>
      <Lang />
      <User />
    </ContainerHeader>
  );
};

const ContainerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${({ theme }) => theme.primary};
  padding: 0.5rem 1.2rem;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;

  & > :first-child {
    display: block;
    margin-right: auto;
  }
`;

export default Header;