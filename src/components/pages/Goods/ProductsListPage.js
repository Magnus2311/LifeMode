import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as productsActions from "../../../redux/actions/productsActions";
import ProductPreview from "./ProductPreview";
import "../../../css/products.css";
import Category from "../../common/Category";
import BackButton from "../../common/BackButton";

const ProductsListPage = (props) => {
  const { products, categories, onLoadProducts } = props;
  const { categoryId } = props.match.params;

  const category = categoryId
    ? categories.find((c) => c.id === parseInt(categoryId))
    : undefined;

  useEffect(onLoadProducts, []);

  return (
    <>
      {category ? (
        <>
          <div className="choosen-category-container">
            <BackButton history={props.history} />
            <Category name="category" key={category.id} category={category} />
          </div>
          <hr />
        </>
      ) : (
        <></>
      )}
      <div className="products-container">
        {products
          .filter((p) => !categoryId || p.categoryId === parseInt(categoryId))
          .map((product) => {
            return <ProductPreview key={product.id} product={product} />;
          })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.categories,
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
