import React, { useContext } from "react";
import { CartContext } from "../../../common/Contexts/CartContext";

import CartItem from "./CartItem";

const CartProducts = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div className="">
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CartProducts;
