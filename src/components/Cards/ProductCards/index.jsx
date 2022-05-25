import React from "react";
import RestaurantCard from "./ProductCard";
import { CardsContainer } from "./ProductCardStyle";

const RestaurantCards = ({ datas }) => {
  console.log(datas);
  return (
    <CardsContainer>
      {datas.map((data) => (
        <RestaurantCard
          key={data.id}
          id={data.id}
          name={data.name}
          desc={data.desc}
          price={data.price}
          restaurant={data.restaurant}
          img_url={data.img_url}
        />
      ))}
    </CardsContainer>
  );
};

export default RestaurantCards;
