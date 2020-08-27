import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as categoryActions from "../../../redux/actions/categoryActions";
import Category from "../../common/Category";

const CategoriesListPage = (props) => {
  const { categories, onLoadCategories } = props;

  useEffect(onLoadCategories, []);

  return categories.map((category) => {
    return <Category key={category.id} category={category} />;
  });
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadCategories: () => {
      dispatch(categoryActions.loadCategories());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesListPage);
