import React from "react";
import { useNavigate } from "react-router-dom";

export const FoodOrderList = ({ orderList }) => {
  const navigate = useNavigate();
  const cartHandler = () => {
    navigate("/food/cart");
  };
  return (
    <div>
      <h3>Order List</h3>

      <div>
        {orderList.map((food) => {
          return (
            <div>
              <p>
                {food.name}: {food.count}
              </p>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <div>Please Add food to order and get existing offers</div>
        <button className="cartbtn" onClick={cartHandler}>
          go to Cart
        </button>
      </div>
    </div>
  );
};
