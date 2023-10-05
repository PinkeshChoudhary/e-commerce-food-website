import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FoodItemCard } from "./FoodItemCard";
import { FoodOrderList } from "./FoodOrderList";

export const FoodItems = ({ searchMenuList }) => {
  const { foodName } = useParams();
  const [menu, setMenu] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFoodItems() {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodName}`)
        .then((res) => {
          setMenu(res?.data?.meals);
          setLoading(false);
        });
    }
    getFoodItems();
  }, []);

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(menu));
  }, [menu]);

  const navigate = useNavigate();

  const foodOrderListHandler = (foodCount, foodName, foodImage, id) => {
    if (foodCount <= 0) return;
    const existingItem = orderList.find((el) => el.name === foodName);
    if (existingItem?.count === foodCount) return;
    if (existingItem) {
      existingItem.count = foodCount;
      setOrderList([...orderList]);
    } else {
      setOrderList([
        ...orderList,
        { name: foodName, count: foodCount, image: foodImage, id: id },
      ]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(orderList));
  }, [orderList]);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          backgroundColor: "rgb(224 219 219 / 28%)",
        }}
      >
        <div className="fooditemslist">
          <div className="back-btn">
            <button onClick={() => navigate("/")}>home page</button>
          </div>
          {!loading ? (
            <div
              className="fooditemslist"
              style={{ width: "100%", overflow: "scroll", maxHeight: "100vh" }}
            >
              {searchMenuList.length > 0
                ? searchMenuList.map((item) => {
                    return (
                      <FoodItemCard
                        key={item.id}
                        item={item}
                        foodOrderListHandler={foodOrderListHandler}
                      />
                    );
                  })
                : menu.map((item) => {
                    return (
                      <FoodItemCard
                        key={item.id}
                        item={item}
                        foodOrderListHandler={foodOrderListHandler}
                      />
                    );
                  })}
            </div>
          ) : (
            <div className="loading">Loading</div>
          )}
        </div>
        <div className="order-list">
          <FoodOrderList orderList={orderList} />
        </div>
      </div>
    </>
  );
};
