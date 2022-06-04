import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <ContainerLogo>
      <Link to="/panel/dashboard">
        <img src="/images/logo.svg" alt="logo" />
      </Link>
    </ContainerLogo>
  );
};

const ContainerLogo = styled.div`
  width: 92px;
  height: 32px;
  cursor: pointer;
`;

export default Logo;
