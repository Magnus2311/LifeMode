import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as productsActions from "../../../redux/actions/productsActions";
import ProductPreview from "./ProductPreview";

const ProductsListPage = (props) => {
  const { products, onLoadProducts } = props;

  useEffect(onLoadProducts, []);

  return products.map((product) => {
    return <ProductPreview key={product.id} product={product} />;
  });
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadProducts: () => {
      dispatch(productsActions.loadProducts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListPage);
