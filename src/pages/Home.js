import React, { useState } from "react";
import { Meals } from "./Meals";
import { Route, Routes } from "react-router-dom";
import { FoodItems } from "../MyComponents/FoodItems";
import { Cart } from "../MyComponents/Cart";

export const Home = ({ text, searchMenuList }) => {
  const [foodName, setFoodName] = useState("");
  const visitFood = (foodName) => {
    setFoodName(foodName);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Meals visitFood={visitFood} />}></Route>
        <Route
          path="/food/:foodName"
          element={<FoodItems text={text} searchMenuList={searchMenuList} />}
        ></Route>
        <Route path="/food/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};
