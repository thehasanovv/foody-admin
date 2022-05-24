import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme }) => theme.bgCard};
  box-shadow:${({ theme }) => theme.Cardshadow};
  height: auto;
  width: 12vw;
  padding: 0.5rem 0;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12vw;
  height: 15vh;
  box-sizing: border-box;
  height: 70%;
`;
export const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 50%;
`;
export const SecondCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20%;
  padding: 0 0.5rem;
`;
export const ProductTitle = styled.h6`
  text-align: left !important;
  color: green;
`;
export const RestaurantName = styled.div``;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Price = styled.span`
  color: red;
`;
export const Button = styled(MdDelete)`
  color: #ff0000;
`;
