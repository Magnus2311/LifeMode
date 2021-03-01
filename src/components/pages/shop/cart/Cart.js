import React, { useContext } from "react";
import CartProducts from "./CartProducts";
import { CartContext } from "../../../../components/common/Contexts/CartContext";
import { Link } from "react-router-dom";
import { Translator } from "../../../../services/languages/Laguage";

const Cart = () => {
  const {
    total,
    cartItems,
    itemCount,
    clearCart,
    checkout,
    handleCheckout,
  } = useContext(CartContext);

  return (
    <>
      <div style={{ width: "100%" }}>
        <div className="text-center mt-5">
          <div className="title">
            <Translator getString="Shopping bag" />
          </div>
        </div>

        <div style={{ width: "100%" }}>
          <div className="cardProducts">
            {cartItems && cartItems.length > 0 ? (
              <CartProducts />
            ) : (
              <div className="p-3 text-center text-muted">
                <Translator getString="Your cart is empty" />
              </div>
            )}

            {checkout && (
              <div className="p-3 text-center text-success">
                <p>Checkout successfull</p>
                <Link to="/" className="btn btn-outline-success btn-sm">
                  <Translator getString="Buy more" />
                </Link>
              </div>
            )}
          </div>
          {cartItems && cartItems.length > 0 && (
            <div className="summary">
              <div className="card summaryCard" style={{ width: "100%" }}>
                <p style={{ margin: "5px" }}>
                  <Translator getString="Total items" />
                </p>
                <h4>{itemCount}</h4>
                <p style={{ margin: "5px" }}>
                  <Translator getString="Total price" />
                </p>
                <h3>{total}</h3>
                <hr />
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary mb-2"
                    onClick={handleCheckout}
                  >
                    <Translator getString="Checkout" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outlineprimary btn-sm"
                    onClick={clearCart}
                  >
                    <Translator getString="Clear cart" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
