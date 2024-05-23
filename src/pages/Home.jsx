import React from "react";9
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Hero/>
      <CategoryMenu />
      <FoodItems />
      <Cart />  
      <Footer/>
    </>
  );
};

export default Home;
