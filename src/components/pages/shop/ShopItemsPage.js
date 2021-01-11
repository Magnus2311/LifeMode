import userEvent from "@testing-library/user-event";
import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as shopActions from "../../../redux/actions/shopActions";

const ShopItemsPage = (props) => {
  const { shopCategoryId } = props.match.params;
  const { shopItemsByCategory, onLoadShopItems } = props;
  useEffect(() => onLoadShopItems(shopCategoryId), []);
  debugger;
  return (
    <>
      {shopItemsByCategory &&
        shopItemsByCategory.map((item) => {
          return (
            <>
              <p key={item.id}>{item.name}</p>
            </>
          );
        })}
    </>
  );
};

const mapsStateToProps = (state) => {
  return { shopItemsByCategory: state.shopItemsByCategory };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    onLoadShopItems: (shopCategoryId) => {
      dispatch(shopActions.loadShopItemsByCategory(shopCategoryId));
    },
  };
};
export default connect(mapsStateToProps, mapsDispatchToProps)(ShopItemsPage);
