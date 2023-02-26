import React from "react";
import useStore from "../../Store/StoreContext";
import PaymentItemCard from "../../components/PaymentItemCard/PaymentItemCard";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";
import CheckOut from "../../components/CheckOut/CheckOut";

export default function CartPage() {
  const { productsInCart, total } = useStore();
  let navigate = useNavigate();

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <span
          style={{ marginLeft: "50px" }}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/logo.png" alt="logo" width={"100px"} />
        </span>
        <h1
          style={{
            textAlign: "center",
            height: "50px",
            marginTop: "10px",
            paddingBottom: "60px",
            fontFamily: "cursive",
            boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
            marginLeft: "50px",
          }}
        >
          My Bag
        </h1>
      </div>
      <div id="cart-page-container">
        <div id="cart-items">
          {productsInCart.map((obj, index) => {
            return (
              <PaymentItemCard
                id={index}
                imgUrl={obj.image.file.url}
                name={obj.name}
                description={obj.description}
                price={obj.price}
                serial={obj.serial}
              />
            );
          })}
        </div>
        <div>
          <CheckOut num={productsInCart.length} total={total} />
        </div>
      </div>
    </>
  );
}
