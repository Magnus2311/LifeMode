import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as categoryActions from "../../../redux/actions/categoryActions";
import Category from "../../common/Category";
import "../../../css/categories.css";
import AutoCompleteBox from "../../common/AutoCompleteBox";
import { Redirect } from "react-router-dom";

const CategoriesListPage = (props) => {
  const { categories, onLoadCategories } = props;
  // eslint-disable-next-line
  const [searchText, setSearchtext] = useState("");
  const [shownCategories, setShownCategories] = useState(categories);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(onLoadCategories, []);

  const handleCategoryChoose = (event) => {
    setSearchtext(event.target.textContent);
    var category = categories.find(
      (category) => category.name === event.target.innerHTML
    );
    debugger;
    if (category.subCategories.length > 0) {
      setSubcategories(category.subCategories);
      setShownCategories([category]);
    } else return <Redirect to={`/products/${category.name}`} />;
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
        placeholder="Choose category"
        handleSubmit={handleCategoryChoose}
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
      <div className="sub-categories-container">{subcategories}</div>
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
