import React from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";
import useStore from "../../Store/StoreContext";

function Item(props) {
  const { name, description, price, serial, image } = props;

  const navigate = useNavigate();
  const { addToCart } = useStore();
  const list = [props];

  return (
    <div id="item-container">
      <div>
        <img
          id="game-pic"
          src={image.file.url}
          alt="game-gear"
          width={"600px"}
          height={"500px"}
        />
      </div>
      <div id="item-desc-container">
        <h1>{name}</h1>
        <h4>{description}</h4>
        <div>
          <span style={{ fontWeight: "bolder", color: "red" }}>
            Price : Rs {price}
          </span>
        </div>
        <div id="item-btns">
          <button
            onClick={() => {
              addToCart(list);
            }}
          >
            add to cart
          </button>
          <button
            onClick={() => {
              navigate("/cart");
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
