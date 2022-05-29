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

import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { IconButtonMui } from "./RestaurantCardStyle";

const BCard = (props) => {
  const dispatch = useDispatch();
  const { id, name, category, img_url, rm } = props;
  
  const handleDelete = (id) => {
    dispatch(rm(id));
  };
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={img_url} alt={name} />
      </ImageContainer>
      <SecondCardContainer>
        <ProductTitle>{name}</ProductTitle>
        <RestaurantName>{category}</RestaurantName>
      </SecondCardContainer>
      <IconButtonMui onClick={() => handleDelete(id)}>
        <Button />
      </IconButtonMui>
    </CardContainer>
  );
};

export default BCard;
