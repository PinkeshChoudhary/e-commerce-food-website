import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [price, setPrice] = useState(200);

  useEffect(() => {
    const cartList = JSON.parse(localStorage.getItem("cart"));
    if (cartList) {
      setCartList(cartList);
    }
  }, []);

  const cartDeleteHandler = (itemId) => {
    const newList = cartList.filter((el) => el.id !== itemId);
    setCartList(newList);

    const updatedCartInLocalStorage = cartList.filter((el) => el.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCartInLocalStorage));
  };

  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <button
        style={{ height: "42px", marginTop: "2rem" }}
        onClick={() => navigate(-1)}
      >
        {" "}
        go to Food page{" "}
      </button>
      {cartList.length > 0 ? (
        <div className="cart">
          {cartList.map((item) => {
            return (
              <div className="cart-card">
                <div className="cart-image-ctnr">
                  <img src={item.image} style={{ width: "120px" }} />
                </div>
                <div>
                  <p>{item.name} </p>
                  <p>Number of item : {item.count}</p>
                  <p>Rs {price * item.count}/-</p>
                  <Button
                    variant="outlined"
                    endIcon={<DeleteIcon />}
                    onClick={() => cartDeleteHandler(item.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No Items to order
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>Total Price</h3>
        <p>
          {cartList.length * price}
          <span style={{ marginLeft: "1rem" }}>(With special offers)</span>
        </p>
        <p>gst charges : {Math.floor(Math.random() * 100) + 1}</p>
        <p>Delivery charges: {Math.floor(Math.random() * 100) + 1}</p>
        <button>Place order</button>
      </div>
    </div>
  );
};
