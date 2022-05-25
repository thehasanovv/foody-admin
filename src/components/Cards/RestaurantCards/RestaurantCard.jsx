import React from "react";
import {
  CardContainer,
  ImageContainer,
  ProductTitle,
  RestaurantName,
  Button,
  Image,
  SecondCardContainer,
} from "./RestaurantCardStyle";

const BCard = (props) => {
  const { id, name, category, img_url } = props;

  return (
    <CardContainer>
      <ImageContainer>
        <Image src={img_url} alt={name} />
      </ImageContainer>
      <SecondCardContainer>
        <ProductTitle>{name}</ProductTitle>
        <RestaurantName>{category}</RestaurantName>
      </SecondCardContainer>
      <Button />
    </CardContainer>
  );
};

export default BCard;
