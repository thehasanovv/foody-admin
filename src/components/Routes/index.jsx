import React from "react";
import { Routes, Route } from "react-router-dom";

// import Pages

import Dashboard from "../../pages/Dashboards";
import Products from "../../pages/Product";
import Restaurants from "../../pages/Restaurant";
import Category from "../../pages/Category";
import Orders from "../../pages/Orders";
import Offers from "../../pages/Offers";
import Login from "../../pages/Login";

const Routlar = () => {
  return (
    <Routes>
      <Route path="/panel/dashboard" element={<Dashboard />} />
      <Route path="/panel/products" element={<Products />} />
      <Route path="/panel/restaurants" element={<Restaurants />} />
      <Route path="/panel/category" element={<Category />} />
      <Route path="/panel/orders" element={<Orders />} />
      <Route path="panel/offers" element={<Offers />} />
      <Route path="/logout" element={<Login />} />
      <Route path="*" element={`Page not found`} />
    </Routes>
  );
};

export default Routlar;
