import React from 'react'
import { Routes,Route } from 'react-router-dom'

// import Pages

import Dashboard from '../../pages/Dashboards'
import Products from '../../pages/Product'
import Restaurants from '../../pages/Restaurant'
import Category from '../../pages/Category'
import Orders from '../../pages/Orders'
import Offers from '../../pages/Offers'

const Routlar = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/category" element={<Category />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/offers" element={<Offers />} />
       {/*  <Route path="/logout"  /> */}
    </Routes>
  )
}

export default Routlar