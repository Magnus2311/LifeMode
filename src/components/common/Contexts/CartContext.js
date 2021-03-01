import React, { createContext, useReducer } from "react";
import { CartReducer, sumItems } from "../../../redux/reducers/cartReducers";

export const CartContext = createContext();

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const increase = (product, quantity) => {
    dispatch({ type: "INCREASE", product, quantity });
  };

  const setExactQuantity = (product, quantity) => {
    debugger;
    dispatch({ type: "SETEXACTQUANTITY", product, quantity });
  };

  const decrease = (product) => {
    dispatch({ type: "DECREASE", product });
  };

  const addProduct = (product, quantity) => {
    dispatch({ type: "ADD_ITEM", product, quantity });
  };

  const removeProduct = (product) => {
    dispatch({ type: "REMOVE_ITEM", product });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleCheckout = () => {
    console.log("CHECKOUT", state);
    dispatch({ type: "CHECKOUT" });
  };

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    setExactQuantity,
    decrease,
    clearCart,
    handleCheckout,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
