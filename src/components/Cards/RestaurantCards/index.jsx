import React from "react";
import RestaurantCard from "./RestaurantCard";
import { CardsContainer } from "./RestaurantCardStyle";

const RestaurantCards = ({ datas }) => {
  return (
    <CardsContainer>
      {datas.map((data) => (
        <RestaurantCard
          key={data.id}
          id={data.id}
          name={data.name}
          category={data.category}
          img_url={data.img_url}
        />
      ))}
    </CardsContainer>
  );
};

export default RestaurantCards;
