import { Avatar } from "@mui/material";
import styled from "styled-components";

const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AvatarUser = styled(Avatar)`
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-left: 1rem;
`;

const User = () => {
  return (
    <ContainerUser>
      <AvatarUser />
      <Title>Admin</Title>
    </ContainerUser>
  );
};

export default User;
