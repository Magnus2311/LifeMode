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

  const increase = (payload, quantity) => {
    dispatch({ type: "INCREASE", payload, quantity });
  };

  const setExactQuantity = (payload, quantity) => {
    debugger;
    dispatch({ type: "SETEXACTQUANTITY", payload, quantity });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const addProduct = (payload, quantity) => {
    dispatch({ type: "ADD_ITEM", payload, quantity });
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
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
