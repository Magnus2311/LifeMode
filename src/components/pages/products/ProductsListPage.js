import React from "react";
import { connect } from "react-redux";
import ProductPreview from "./ProductPreview";
import "../../../css/products.css";
import ChosenCategories from "../../common/Categories/ChosenCategories";
import "../../../css/products.scss";
import Loader from "../../common/Loader";

const ProductsListPage = (props) => {
  const { products, categories, loading } = props;
  const { categoryId } = props.match.params;
  debugger;

  return (
    <>
      <Loader isLoading={loading} />
      {categoryId && (
        <ChosenCategories
          history={props.history}
          categoryId={categoryId}
          categories={categories}
        />
      )}
      <div className="products-container">
        {products
          .filter((p) => !categoryId || p.categoryId === categoryId)
          .map((product) => {
            return <ProductPreview key={product.id} product={product} />;
          })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  debugger;
  return {
    products: state.products,
    categories: state.categories,
    loading: state.loader.isProductsLoading,
  };
};

export default connect(mapStateToProps)(ProductsListPage);
