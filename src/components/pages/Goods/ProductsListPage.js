import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as productsActions from "../../../redux/actions/productsActions";
import ProductPreview from "./ProductPreview";
import "../../../css/products.css";

const ProductsListPage = (props) => {
  const { products, onLoadProducts } = props;
  const { categoryId } = props.match.params;
  debugger;

  useEffect(onLoadProducts, []);

  return (
    <div className="products-container">
      {products
        .filter((p) => !categoryId || p.categoryId === parseInt(categoryId))
        .map((product) => {
          return <ProductPreview key={product.id} product={product} />;
        })}
    </div>
  );
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
