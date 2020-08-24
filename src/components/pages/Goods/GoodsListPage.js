import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as goodsActions from "../../../redux/actions/goodsActions";
import GoodsPreview from "./GoodsPreview";

const GoodsListPage = (props) => {
  const { goods, onLoadGoods } = props;

  useEffect(onLoadGoods, []);

  return goods.map((goods) => {
    return <GoodsPreview key={goods.id} goods={goods} />;
  });
};

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadGoods: () => {
      dispatch(goodsActions.loadGoods());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsListPage);
