import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ItemPage from "../Pages/ItemViewPage/ItemViewPage";

import CartPage from "../Pages/CartPage/CartPage";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:sid" element={<ItemPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<h3>page NOT Found</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
