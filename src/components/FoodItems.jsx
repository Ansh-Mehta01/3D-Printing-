import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(`Added ${name} `);

  // Function to handle sharing via Facebook
  const handleShareFacebook = (name) => {
    const shareUrl = 'https://www.facebook.com/sharer/sharer.php';
    const genericUrl = 'https://www.google.com/search?q=your+project';
    const urlParams = new URLSearchParams({
      u: genericUrl, // URL of your app or specific content
      quote: `Check out this delicious food: ${name}`, // Caption for the shared content
    });
    const facebookUrl = `${shareUrl}?${urlParams.toString()}`;
    window.open(facebookUrl, '_blank');
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div id="12" className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
            handleShareFacebook={() => handleShareFacebook(food.name)} // Pass the share function as prop
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;