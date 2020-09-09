import React from "react";
import Category from "./Category";
import findAllParentCategories, {
  handleCategoryClick,
} from "../../../services/categories/categories";

const ChosenCategories = (props) => {
  const { categoryId, categories } = props;

  const handleClick = (event) => {
    handleCategoryClick(event, categories, props.history);
  };

  const items = findAllParentCategories(categoryId, categories).map(
    (category) => {
      return (
        category && (
          <Category
            name="category"
            key={category.id}
            category={category}
            handleClick={handleClick}
          />
        )
      );
    }
  );

  return (
    <>
      <div className="choosen-category-container">{items}</div>
      <hr />
    </>
  );
};

export default ChosenCategories;
