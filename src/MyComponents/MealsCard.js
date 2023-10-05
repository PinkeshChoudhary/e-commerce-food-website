import React, { useState } from "react";
import { FoodCard } from "../styles";
import { Link } from "react-router-dom";

export const MealsCard = ({ meals, visitFood }) => {
  const [visibleDesc, setVisibleDesc] = useState(100);

  const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } =
    meals;

  const loadMore = () => {
    setVisibleDesc(strCategoryDescription.length);
  };
  const loadLess = () => {
    setVisibleDesc(100);
  };

  return (
    <FoodCard>
      <div>
        <div>
          <img src={strCategoryThumb} style={{ width: "200px" }} />
        </div>
        <p className="food-category">Food Type : {strCategory}</p>
      </div>
      <div>
        <p>{strCategoryDescription.slice(0, visibleDesc)}</p>
        <div className="buttons">
          {visibleDesc > 100 ? (
            <button onClick={loadLess} className="see-more-btn">
              see less
            </button>
          ) : (
            <button onClick={loadMore} className="see-more-btn">
              see more
            </button>
          )}

          <button
            className="explore-btn"
            onClick={() => visitFood(strCategory)}
          >
            <Link to={`/food/${strCategory}`} className="explore-link">
              Explore{" "}
            </Link>
          </button>
        </div>
      </div>
    </FoodCard>
  );
};
