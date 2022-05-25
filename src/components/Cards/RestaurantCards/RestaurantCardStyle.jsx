import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.6rem;
  margin-bottom: 1rem;
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center; */
  border-radius: 7px;
  background: ${({ theme }) => theme.bgCard};
  box-shadow: ${({ theme }) => theme.Cardshadow};
  padding: ${({ theme }) => theme.boxModel.padding.small};
`;

export const ImageContainer = styled.div`
  width: 4rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SecondCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.5rem;
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

export const Button = styled(MdDeleteForever)`
  color: ${({ theme }) => theme.colors.lightRed};
  font-size: ${({ theme }) => theme.font.size.large};
  cursor: pointer;
  position: absolute;
  top: 11%;
  right: 5%;
`;
