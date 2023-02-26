import React from "react";
import "./PaymentItemCard.css";
import useStore from "../../Store/StoreContext";

export default function PaymentItemCard(props) {
  let { imgUrl, name, description, price, serial } = props;
  const { removeFromCart } = useStore();
  return (
    <>
      <div id="PaymentItemCard-container">
        <div>
          <img
            src={imgUrl}
            alt="game-gear"
            width={"250px"}
            height={"200px"}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <h3 style={{ margin: "0px" }}>{name}</h3>
          <p
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              margin: "0px",
            }}
          >
            {description}
          </p>
          <div style={{ color: "red", fontWeight: "bolder" }}>
            price : Rs {price}
          </div>
          <div>
            <button
              onClick={() => {
                removeFromCart(props);
              }}
              style={{ textAlign: "center" }}
            >
              remove from cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
