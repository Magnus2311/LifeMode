import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as shopItemsActions from "../../../redux/actions/shopItemAction";

const ShopItemsPage = (props) => {
  const { shopCategoryId } = props.match.params;
  const { shopItemsByCategory, onLoadShopItems } = props;
  useEffect(() => onLoadShopItems(shopCategoryId), []);
  debugger;
  return (
    <>
      {shopItemsByCategory &&
        shopItemsByCategory.length > 0 &&
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
      dispatch(shopItemsActions.loadShopItemsByCategory(shopCategoryId));
    },
  };
};
export default connect(mapsStateToProps, mapsDispatchToProps)(ShopItemsPage);
