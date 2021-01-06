import React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import "../../../css/categories.css";
import * as shopActions from "../../../redux/actions/shopActions";
import ShopSubCategory from "../../common/Shop/ShopSubCategory";
import "../../../css/shopCategories.css";
const ShopPage = (props) => {
  debugger;
  const { shopCategories, onLoadShopCategories } = props;
  debugger;
  return (
    <>
      {shopCategories
        .filter((category) => !category.parentId)
        .map((category) => {
          return (
            <div
              className="container"
              style={{ display: "flow-root", marginTop: "20px" }}
            >
              <div>
                <Form.Label style={{ fontSize: "25px", fontWeight: "bold" }}>
                  {category.name}
                </Form.Label>
              </div>
              <div className="shopCategories-list-container" key={category.Id}>
                {category.subCategories.map((subCategory) => {
                  return (
                    <ShopSubCategory
                      name="subCategory"
                      key={subCategory.id}
                      category={subCategory}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
    </>
  );
};

const mapsStateToProps = (state) => {
  return {
    shopCategories: state.shopCategories,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    onLoadShopCategories: () => {
      dispatch(shopActions.loadShopCategories());
    },
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ShopPage);
