import React from "react";
import Router from "./Router/Router";
import { StoreProvider } from "./Store/StoreContext";
import "./App.css";
function App() {
  return (
    <>
      <StoreProvider>
        <Router />
      </StoreProvider>
    </>
  );
}

export default App;
