import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from './pages/Product';
import Categories from './pages/Categories';
import MobileProduct from './pages/MobileProduct';
import MobileCategories from './pages/MobileCategories';

import { useMediaQuery } from "react-responsive";
import './App.css';



const App = () => { 
  const isNonMobileDevice = useMediaQuery({
    query: "(min-device-width: 500px)"
  })
  
  return(
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="product" element={isNonMobileDevice ? <Product /> : <MobileProduct />} />
    <Route path="categories" element={isNonMobileDevice ? <Categories /> : <MobileCategories />} />
  </Routes> 
    </>
  )};

export default App;
