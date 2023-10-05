import React, { useEffect, useState } from "react";
import axios from "axios";
import { MealsCard } from "../MyComponents/MealsCard";
import { FoodCtnr } from "../styles";

export const Meals = ({ visitFood }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => {
          setMeals(res.data.categories);
          setLoading(false);
        });
    }
    fetchData();
  }, []);
  return (
    <>
      {!loading ? (
        <FoodCtnr>
          {meals.slice(1, 15).map((item) => {
            return (
              <MealsCard
                meals={item}
                key={item.idCategory}
                visitFood={visitFood}
              />
            );
          })}
        </FoodCtnr>
      ) : (
        <div className="loading">Loading</div>
      )}
    </>
  );
};
