import React from "react";
import { connect } from "react-redux";
import ChosenCategories from "../../common/Categories/ChosenCategories";
import Category from "../../common/Categories/Category";
import { handleCategoryClick } from "../../../services/categories/categories";

const findSubCategories = (categoryId, categories) => {
  return (
    categories && categories.filter((c) => c.parentId === parseInt(categoryId))
  );
};

const SubCategoriesListPage = (props) => {
  const { categories } = props;
  const { categoryId } = props.match.params;

  const handleCategoryChoose = (event) => {
    handleCategoryClick(event, categories, props.history);
  };

  return (
    <>
      <ChosenCategories
        history={props.history}
        categoryId={categoryId}
        categories={categories}
      />
      {findSubCategories(categoryId, categories).map((category) => {
        return (
          <Category
            name="category"
            key={category.id}
            category={category}
            handleClick={handleCategoryChoose}
          />
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(SubCategoriesListPage);
