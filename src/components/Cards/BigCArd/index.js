import { IconButton } from '@material-ui/core';
import React from 'react';
import {
  CardContainer,
  ImageContainer,
  ProductTitle,
  RestaurantName,
  SubContainer,
  Price,
  Button,
  Image,
  SecondCardContainer,
} from './style';

const BCard = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image
          src="https://th.bing.com/th/id/R.9763b6fac891cd6fb5012cd35d114462?rik=kNdmY6j8y%2fWWQg&pid=ImgRaw&r=0"
          alt=""
        />
      </ImageContainer>
      <SecondCardContainer>
        <ProductTitle>Pizza</ProductTitle>
        <RestaurantName>Pizza Hut</RestaurantName>
        <SubContainer>
          <Price>$10</Price>
          <IconButton>
            <Button />
          </IconButton>
        </SubContainer>
      </SecondCardContainer>
    </CardContainer>
  );
};

export default BCard;
