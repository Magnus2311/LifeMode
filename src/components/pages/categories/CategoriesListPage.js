import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as categoryActions from "../../../redux/actions/categoryActions";
import Category from "../../common/Category";
import "../../../css/categories.css";
import AutoCompleteBox from "../../common/AutoCompleteBox";

const CategoriesListPage = (props) => {
  const { categories, onLoadCategories } = props;
  // eslint-disable-next-line
  const [searchText, setSearchtext] = useState("");
  const [shownCategories, setShownCategories] = useState(categories);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(onLoadCategories, []);

  const handleAutocompleteOptionChoose = (event) => {
    setSearchtext(event.target.textContent);
    var category = categories.find(
      (category) => category.name === event.target.textContent
    );
    debugger;
    if (category && category.subCategories.length > 0) {
      setSubcategories(category.subCategories);
      setShownCategories([category]);
    } else props.history.push(`/products/${category.id}`);
  };

  const handleCategoryChoose = (event) => {
    setSearchtext(event.target.textContent);
    var category = categories.find(
      (category) =>
        category.id === parseInt(event.currentTarget.getAttribute("data-id"))
    );

    if (category && category.subCategories.length > 0) {
      setSubcategories(category.subCategories);
      setShownCategories([category]);
    } else props.history.push(`/products/${category.id}`);
  };

  const handleSerachTextChanged = (searchText) => {
    setSearchtext(searchText);
    if (searchText === "") setShownCategories([]);
    else
      setShownCategories(
        categories.filter((category) => {
          return category.name.includes(searchText);
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
      <div className="categories-container">
        {shownCategories.length === 0
          ? categories.map((category) => {
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
      <div className="sub-categories-container">
        {subcategories.map((category) => {
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
