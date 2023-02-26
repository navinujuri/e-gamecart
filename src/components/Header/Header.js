import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header(prop) {
  const navigate = useNavigate();
  return (
    <div id="header-container">
      <div
        style={{ marginLeft: "50px" }}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="/logo.png" alt="logo" width={"100px"} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search for Products here..."
          style={{
            textAlign: "center",
            width: "500px",
            height: "50px",
            borderRadius: "10px",
          }}
        />
      </div>
      <div
        onClick={() => {
          navigate("/cart");
        }}
        style={{ marginRight: "50px" }}
      >
        <ShoppingCartIcon fontSize="large" />
        <span id="num">{prop.num}</span>
      </div>
    </div>
  );
}

export default Header;
