import React from "react";
import BackButton from "../BackButton";
import Category from "./Category";
import findAllParentCategories, {
  handleCategoryClick,
} from "../../../services/categories/categories";

const ChosenCategories = (props) => {
  const { history, categoryId, categories } = props;

  const handleClick = (event) => {
    handleCategoryClick(event, categories, props.history);
  };

  return (
    <>
      <div className="choosen-category-container">
        <BackButton history={history} />
        {findAllParentCategories(categoryId, categories).map((category) => {
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
        })}
      </div>
      <hr />
    </>
  );
};

export default ChosenCategories;
