import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as categoryActions from "../../../redux/actions/categoryActions";
import "../../../css/categories.css";
import AutoCompleteBox from "../../common/AutoCompleteBox";
import Category from "../../common/Categories/Category";
import ChosenCategories from "../../common/Categories/ChosenCategories";
import { handleCategoryClick } from "../../../services/categories/categories";

const CategoriesListPage = (props) => {
  const { categories, onLoadCategories } = props;
  let { categoryId } = props.match.params;
  // eslint-disable-next-line
  const [searchText, setSearchtext] = useState("");
  const [shownCategories, setShownCategories] = useState(
    categories.filter((category) => !category.parentId)
  );

  useEffect(onLoadCategories, []);

  const handleAutocompleteOptionChoose = (event) => {
    setSearchtext(event.target.textContent);
    var category = categories.find(
      (category) =>
        category.name.toLowerCase() === event.target.textContent.toLowerCase()
    );
    if (category && category.subCategories.length > 0)
      props.history.push(`/categories/${category.id}`);
    else props.history.push(`/products/${category.id}`);
  };

  const handleCategoryChoose = (event) => {
    setSearchtext(event.target.textContent);
    handleCategoryClick(event, categories, props.history);
  };

  const handleSerachTextChanged = (searchText) => {
    setSearchtext(searchText);
    if (searchText === "") setShownCategories([]);
    else
      setShownCategories(
        categories.filter((category) => {
          return category.name.toLowerCase().includes(searchText.toLowerCase());
        })
      );
  };

  return (
    <>
      <AutoCompleteBox
        handleSubmit={handleAutocompleteOptionChoose}
        handleChange={handleSerachTextChanged}
        data={categories.map((category) => {
          return category.name;
        })}
      />
      {categoryId && (
        <ChosenCategories
          history={props.history}
          categoryId={categoryId}
          categories={categories}
        />
      )}
      <div className="categories-container">
        {shownCategories.length === 0
          ? categories
              .filter((category) => !category.parentId)
              .map((category) => {
                return (
                  !category.parentId && (
                    <Category
                      name="category"
                      key={category.id}
                      category={category}
                      handleClick={handleCategoryChoose}
                    />
                  )
                );
              })
          : shownCategories.map((category) => {
              return (
                <Category
                  name="category"
                  key={category.id}
                  category={category}
                  handleClick={handleCategoryChoose}
                />
              );
            })}
      </div>
    </>
  );
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
