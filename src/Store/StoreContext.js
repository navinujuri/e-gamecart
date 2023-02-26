import { createContext, useReducer, useContext } from "react";
import storeReducer from "./storeReducer";

// --------------------------------------------
// creating Context

const StoreContext = createContext();

//-------------------------------------
//Store Provider
let initialCart = {
  total: 0,
  productsInCart: [],
  allProducts: [],
};
export const StoreProvider = ({ children }) => {
  const [currentCartState, dispatch] = useReducer(storeReducer, initialCart);

  const updatePrice = (productsInCart) => {
    let total = 0;
    productsInCart.forEach((product) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  const addToCart = (product) => {
    const updatedCart = currentCartState.productsInCart.concat(product);

    updatePrice(updatedCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    let updatedCart = new Array(...currentCartState.productsInCart);
    console.log(updatedCart);
    for (let i = 0; i < updatedCart.length; i++) {
      if (updatedCart[i].name === product.name) {
        updatedCart.splice(i, 1);
        break;
      }
    }
    console.log(updatedCart);
    updatePrice(updatedCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        updatedCart,
      },
    });
  };

  const getAllProducts = (allProducts) => {
    console.log(allProducts);
    dispatch({
      type: "AllPRODUCTS",
      payload: {
        allProducts,
      },
    });
  };

  //---------------------------------------------------------
  let value = {
    total: currentCartState.total,
    productsInCart: currentCartState.productsInCart,
    allProducts: currentCartState.allProducts,
    addToCart,
    removeFromCart,
    getAllProducts,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
//-----------------------------------------------
//custom Hook
const useStore = () => {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error("useStore must be used within StoreContext");
  }

  return context;
};

export default useStore;
