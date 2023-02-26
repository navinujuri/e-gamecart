const storeReducer = (currentCartState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload.updatedCart);

      return {
        ...currentCartState,
        productsInCart: payload.updatedCart,
      };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload.updatedCart);

      return {
        ...currentCartState,
        productsInCart: payload.updatedCart,
      };
    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE", payload);

      return {
        ...currentCartState,
        total: payload.total,
      };
    case "AllPRODUCTS":
      console.log("AllPRODUCTS", payload);
      return { ...currentCartState, allProducts: payload.allProducts };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default storeReducer;
