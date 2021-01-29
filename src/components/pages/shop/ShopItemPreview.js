import React, { useEffect, useState } from "react";
import * as shopItemActions from "../../../redux/actions/shopItemActions";
import { connect } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../../../css/shopPreview.css";
import { Button } from "react-bootstrap";

const ShopItemPreview = (props) => {
  const { shopItemId } = props.match.params;
  const { shopItem, onLoadItemInformation } = props;
  const [key, setKey] = useState("preview");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    onLoadItemInformation(shopItemId);
  }, []);

  const handleDecreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleInputQuantity = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = (event) => {};

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="preview" title="Описание">
        <div style={{ margin: "50px", width: "100%" }} className="row">
          <div style={{ float: "left", width: "30%" }}>
            <div>
              <img
                src={shopItem.image}
                alt=""
                style={{ width: "300px", height: "350px" }}
              />
            </div>
            <div style={{ margin: "20px" }}>
              <h4>{shopItem.price} лв.</h4>
            </div>
          </div>
          <div style={{ float: "rigth", width: "60%", margin: "30px" }}>
            <div>
              <h2>{shopItem.name}</h2>
            </div>
            <div>
              <p>{shopItem.description}</p>
            </div>
            <div style={{ display: "inline", float: "right" }}>
              <div>
                <Button
                  style={{ width: "35px", height: "35px" }}
                  onClick={handleDecreaseQuantity}
                >
                  -
                </Button>
                <input
                  style={{
                    width: "60px",
                    textAlign: "center",
                    margin: "0px",
                    border: "inset",
                  }}
                  value={quantity}
                  onChange={handleInputQuantity}
                ></input>
                <Button
                  style={{ width: "35px", height: "35px" }}
                  onClick={handleIncreaseQuantity}
                >
                  +
                </Button>
                <Button className="btn-primary" onClick={handleAddToCart}>
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="usage" title="Употреба">
        <div>
          <div style={{ margin: "50px" }}>
            <h4>Начин на употреба</h4>
            <hr />
          </div>
          <div className="center">
            <p>{shopItem.usage}</p>
          </div>
        </div>
      </Tab>
      <Tab eventKey="opinions" title="Мнения">
        <p>TO DO</p>
      </Tab>
      <Tab eventKey="brand" title="Марка">
        <div>
          <div style={{ margin: "50px" }}>
            <h4>{shopItem?.brand?.name}</h4>
            <hr />
          </div>
          <div className="center">
            <p>{shopItem?.brand?.description}</p>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
};

const mapsDispatchToProps = (dispatch) => {
  return {
    onLoadItemInformation: (shopItemId) => {
      dispatch(shopItemActions.loadShopItem(shopItemId));
    },
  };
};

const mapsStateToProps = (state) => {
  return {
    shopItem: state.shopItem,
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ShopItemPreview);
