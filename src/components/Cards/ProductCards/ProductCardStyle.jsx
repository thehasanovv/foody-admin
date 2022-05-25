import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 0.6rem;
  margin-bottom: 1rem;
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 7px;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bgCard};
  box-shadow: ${({ theme }) => theme.Cardshadow};
  padding: ${({ theme }) => theme.boxModel.padding.small};
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 10rem;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* border-radius: 50%; */
`;

export const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const ProductTitle = styled.h6`
  color: ${({ theme }) => theme.colors.textBlack};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.01em;
`;

export const RestaurantName = styled.div`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: ${({ theme }) => theme.font.size.tiny};
  font-weight: 500;
  letter-spacing: 0.01em;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.textGreenLight};
  font-size: ${({ theme }) => theme.font.size.tiny};
  font-weight: 500;
  letter-spacing: 0.01em;
`;

export const Button = styled(MdDeleteForever)`
  color: ${({ theme }) => theme.colors.lightRed};
  font-size: ${({ theme }) => theme.font.size.large};
  cursor: pointer;
`;
