import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import React from "react";
import {
  CardContainer,
  ImageContainer,
  ProductTitle,
  RestaurantName,
  SubContainer,
  Price,
  Button,
  Image,
  CartBody,
} from "./ProductCardStyle";

const ProductCard = (props) => {
  const { name, desc, price, restaurant, img_url, id } = props;
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={img_url} alt={name} />
      </ImageContainer>
      <CartBody>
        <ProductTitle>{name}</ProductTitle>
        <RestaurantName>{restaurant}</RestaurantName>
        <SubContainer>
          <Price>$ {price}</Price>
          <Button />
        </SubContainer>
      </CartBody>
    </CardContainer>
  );
};

export default ProductCard;
