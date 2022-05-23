import styled from "styled-components";
// import LogoImg from "/images/logo.svg";
const Logo = () => {
  return (
    <ContainerLogo>
      <img src="/images/logo.svg" alt="logo" />
    </ContainerLogo>
  );
};

const ContainerLogo = styled.div`
  width: 92px;
  height: 32px;
`;

export default Logo;
