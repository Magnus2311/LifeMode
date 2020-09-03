import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as productsActions from "../../../redux/actions/productsActions";
import ProductPreview from "./ProductPreview";
import "../../../css/products.css";
import ChosenCategories from "../../common/Categories/ChosenCategories";
import findAllParentCategories from "../../../services/categories/categories";

const ProductsListPage = (props) => {
  const { products, categories, onLoadProducts } = props;
  const { categoryId } = props.match.params;

  const initialize = () => {
    onLoadProducts();
    findAllParentCategories(categoryId, categories);
  };

  useEffect(initialize, []);

  return (
    <>
      <ChosenCategories
        history={props.history}
        categoryId={categoryId}
        categories={categories}
      />
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
