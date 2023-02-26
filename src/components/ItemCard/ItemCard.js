import React from "react";
import "./ItemCard.css";
import { useNavigate } from "react-router-dom";

function ItemCard({ imgUrl, name, description, price, serial }) {
  const navigate = useNavigate();

  return (
    <div id="itemCard-container">
      <div>
        <img
          id="game-pic"
          src={imgUrl}
          alt="game-gear"
          width={"350px"}
          height={"200px"}
        />
      </div>
      <div id="itemCard-desc-container">
        <h3>{name}</h3>
        <p>{description}</p>
        <span style={{ fontWeight: "bolder" }}>Rs {price}</span>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => {
              navigate(`item/${serial}`);
            }}
          >
            View Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
