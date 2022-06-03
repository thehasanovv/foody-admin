import React from "react";
import { IconButtonMui } from "./RestaurantCardStyle";
import { useContext } from "react";
import { DrawerContext } from "../../../contextApi/DrawerContext";
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
