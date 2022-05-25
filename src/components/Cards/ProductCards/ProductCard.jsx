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
  CartBody,
} from './ProductCardStyle';
import { useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core';

const ProductCard = ({ name, price, restaurant, img_url, id, rm }) => {
  const dispatch = useDispatch();
  const handleDelete = (pid) => {
    dispatch(rm(pid));
  };
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
          <IconButton onClick={() => handleDelete(id)}>
            <Button />
          </IconButton>
        </SubContainer>
      </CartBody>
    </CardContainer>
  );
};

export default ProductCard;
