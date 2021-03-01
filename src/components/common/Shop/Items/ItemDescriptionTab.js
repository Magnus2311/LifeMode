import React, { useState, useContext } from "react";
import "../../../../css/shopItems.css";
import "../../../../css/cart.css";
import { connect } from "react-redux";
import { Translator } from "../../../../services/languages/Laguage";
import StarRatings from "react-star-ratings";
import { CartContext } from "../../../common/Contexts/CartContext";
import QuantityControl from "../Cart/QuantityControl";

const ItemDescriptionTab = (props) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { shopItem } = props;
  const [quantity, setQuantity] = useState(1);

  const isInCart = (shopItem) => {
    return !!cartItems.find((item) => item.id === shopItem.id);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity + 1);
    }
  };

  const handleInputQuantity = (event) => {
    if (quantity > 0) {
      setQuantity(parseInt(event.target.value));
    }
  };

  const handleAddToCart = (event) => {
    if (quantity > 0) {
      if (isInCart(shopItem)) {
        increase(shopItem, quantity);
      } else {
        addProduct(shopItem, quantity);
      }
    }
  };

  return (
    <>
      <div className="row center" style={{ margin: "30px" }}>
        <div className="leftElement center itemImagePriceDiv">
          <div>
            <img src={shopItem.image} alt="" className="shopItemImage" />
          </div>
          <div style={{ margin: "20px" }}>
            <h4>{shopItem.price} лв.</h4>
          </div>
        </div>
        <div className="rightElement itemDescription">
          <div>
            <h2>{shopItem.name}</h2>
          </div>
          <div>
            <p>{shopItem.description}</p>
          </div>
          <div
            className="rightElement"
            style={{
              display: "inline",
              margin: "10px",
              paddingTop: "50px",
            }}
          >
            <div className="center">
              <StarRatings
                rating={shopItem.rating}
                starDimension="30px"
                starRatedColor="#db3a2e"
                isSelectable={false}
                numberOfStars={5}
                name="rating"
              />
            </div>
            <div
              className="center"
              style={{ maxWidth: "200px", marginTop: "20px" }}
            >
              <QuantityControl
                quantity={quantity}
                handleIncrease={handleIncreaseQuantity}
                handleDecrease={handleDecreaseQuantity}
                handleInputChange={handleInputQuantity}
              />
              <button
                onClick={handleAddToCart}
                className="btn btn-primary btn-sm"
              >
                <Translator getString="Add to cart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapsDispatchToProps = (dispatch) => {
  return {
    addItemInCart: (shopItemId, quantity) => {},
  };
};
const mapsStateToProps = (state) => {
  return {
    shopItem: state.shopItem,
  };
};

export default connect(
  mapsStateToProps,
  mapsDispatchToProps
)(ItemDescriptionTab);
