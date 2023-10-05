import React, { useState } from "react";

export const FoodItemCard = ({ item, foodOrderListHandler }) => {
  const [itemCount, setItemCount] = useState(0);

  const clickHandler = () => {
    setItemCount(itemCount + 1);
  };
  const decreamentCount = () => {
    setItemCount(itemCount - 1);
  };

  return (
    <>
      <div className="fooditems">
        <div>
          <img
            key={item.idMeal}
            src={item.strMealThumb}
            style={{ width: "200px", borderRadius: "4px" }}
          />
        </div>
        <p className="foodName" key={item.idMeal}>
          {item.strMeal.slice(0, 25)}
        </p>
        <p className="foodName">Rs 200 /-</p>
        <div className="order-details">
          {itemCount === 0 ? (
            <p className="add-btn" onClick={clickHandler}>
              Add
            </p>
          ) : (
            <div
              style={{ display: "flex", gap: "0.7rem", alignItems: "center" }}
            >
              <button style={{ width: "24px" }} onClick={decreamentCount}>
                -
              </button>
              <p>{itemCount}</p>
              <button style={{ width: "24px" }} onClick={clickHandler}>
                +
              </button>
            </div>
          )}

          <div>
            <button
              className="cart-btn"
              onClick={() =>
                foodOrderListHandler(
                  itemCount,
                  item.strMeal,
                  item.strMealThumb,
                  item.idMeal
                )
              }
            >
              Add to List
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
