import React from "react";
import ProductCard from "./ProductCard";
import { CardsContainer } from "./ProductCardStyle";

const ProductCards = ({ datas }) => {
  return (
    <CardsContainer>
      {datas.map((data) => (
        <ProductCard
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

export default ProductCards;
