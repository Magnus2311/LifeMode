import React, { useContext, useState } from "react";
import "../../../../css/cart.css";
import { Translator } from "../../../../services/languages/Laguage";
import { CartContext } from "../../../common/Contexts/CartContext";
import QuantityControl from "../../../common/Shop/Cart/QuantityControl";

const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const { increase, decrease, removeProduct, setExactQuantity } = useContext(
    CartContext
  );
  const handleQuantityChange = (event) => {
    if (event.target.value > 0) {
      setQuantity(event.target.value);
      setExactQuantity(product, event.target.value);
    } else {
      setQuantity("");
      setExactQuantity(product, 0);
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantity(product.quantity + 1);
    increase(product, 1);
  };
  const handleDecreaseQuantity = () => {
    setQuantity(product.quantity - 1);
    if (product.quantity > 1) decrease(product);
  };

  const hanldeOnBlur = (event) => {
    if (event.target.value < 1 || quantity === "") {
      setExactQuantity(product, 1);
      setQuantity(1);
    }
  };

  return (
    <div class="shopping-cart">
      <div class="item">
        <div style={{ margin: "0px" }}>
          <img class="image" src={product.image} alt="" />
        </div>

        <div style={{ width: "100%", margin: "5px" }}>
          <div class="description">
            <span>{product.name}</span>
          </div>

          <div className="priceQuantity">
            <div style={{ position: "absolute" }} class="total-price">
              {product.price}
            </div>
            <div className="quantity">
              <QuantityControl
                quantity={quantity}
                handleIncrease={handleIncreaseQuantity}
                handleDecrease={handleDecreaseQuantity}
                handleInputChange={handleQuantityChange}
                hanldeOnBlur={hanldeOnBlur}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                position: "absolute",
                right: "0",
              }}
            >
              <span
                className="clearText"
                onClick={() => removeProduct(product)}
              >
                <img
                  className="iconImage iconButton"
                  src={`/images/shoppingCart/delete.png`}
                  alt=""
                />
                <p className="hiddenUnder500">
                  <Translator getString="Clear" />
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
