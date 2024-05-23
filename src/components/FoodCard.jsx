import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa"; // Import Facebook icon
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast, handleShareFacebook }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 ">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between items-center">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => {
              dispatch(
                addToCart({ id, name, price, rating, price, img, qty: 1 })
              );
              handleToast(name);
            }}
            className="p-1 text-black bg-orange-200 hover:bg-orange-400 rounded-lg text-sm"
          >
            Add to cart
          </button>
          <button
            onClick={() => handleShareFacebook(name)}
            className="p-1 bg-blue-200 hover:bg-blue-400 rounded-lg text-sm flex items-center" // Added flex and items-center classes
          >
            <FaFacebook className="mr-1" /> {/* Just the Facebook icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;