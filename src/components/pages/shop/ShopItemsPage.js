import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../../../css/shopItems.css";
import * as shopItemsActions from "../../../redux/actions/shopItemActions";
import ItemCard from "../../common/Shop/Items/ItemCard";
import InfiniteScroll from "react-infinite-scroll-component";

const ShopItemsPage = (props) => {
  const { shopCategoryId } = props.match.params;
  const { shopItemsByCategory, onLoadShopItems } = props;
  const { loadingShopItems } = props;
  const { pageNumber } = props;

  useEffect(() => {
    if (pageNumber === 1 && shopItemsByCategory.length < 1) {
      onLoadShopItems(shopCategoryId, 1);
    }
  }, []);

  const loadMore = () => {
    onLoadShopItems(shopCategoryId, pageNumber);
  };
  return (
    <>
      <InfiniteScroll
        style={{ width: "100%", height: "100%" }}
        dataLength={shopItemsByCategory.length}
        next={loadMore}
        hasMore={!loadingShopItems}
        scrollableTarget="root"
      ></InfiniteScroll>
      <div className="items-container">
        {shopItemsByCategory &&
          shopItemsByCategory.length > 0 &&
          shopItemsByCategory.map((item) => {
            return (
              <>
                <ItemCard item={item} />
              </>
            );
          })}
      </div>
      {loadingShopItems && (
        <p style={{ height: "50px" }}>Зареждане на повече елементи</p>
      )}
    </>
  );
};
const mapsStateToProps = (state) => {
  return {
    shopItemsByCategory: state.shopItemsByCategory,
    loadingShopItems: state.loadingShopItems,
    pageNumber: state.pageNumber,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    onLoadShopItems: (shopCategoryId, pageNumber) => {
      dispatch(
        shopItemsActions.loadShopItemsByCategory(shopCategoryId, pageNumber)
      );
    },
  };
};
export default connect(mapsStateToProps, mapsDispatchToProps)(ShopItemsPage);
