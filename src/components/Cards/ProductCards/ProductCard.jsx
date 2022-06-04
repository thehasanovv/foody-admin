import React from "react";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { DrawerContext } from "../../../contextApi/DrawerContext";
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

const ProductCard = ({ name, price, restaurant, img_url, id }) => {
  const { setOpenDeleteModal, setDeleteProductModalID } =
    useContext(DrawerContext);

  const handleDelete = (id) => {
    setOpenDeleteModal(true);
    setDeleteProductModalID(id);
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
