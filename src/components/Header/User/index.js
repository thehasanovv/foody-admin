import { Avatar } from '@mui/material';
import styled from 'styled-components';

const ContainerUser = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AvatarUser = styled(Avatar)`
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
`;
const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
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
