import React, { useState } from "react";
import { Translator } from "../../../services/languages/Laguage";
import { Dropdown } from "react-bootstrap";

const ChooseParentCategory = (props) => {
  const { categories, handleChoose, canSelectMainCategory } = props;
  const [selectedCategory, setSelectedCategory] = useState({
    name: <Translator getString="Main category" />,
    categoryId: "",
  });

  const [isDropdownShown, setIsDropdownShown] = useState(false);

  const closeDropdownAndHandle = (event) => {
    handleClick(event);
  };

  const handleClick = (event) => {
    setIsDropdownShown(false);
    const categoryId = event.target.getAttribute("data-categoryid");
    const categoryName = event.target.getAttribute("data-categoryname");
    setSelectedCategory({ name: categoryName, categoryId: categoryId });
    handleChoose(categoryId);
  };

  const showCategories = (categories) => {
    return categories.map((category) => {
      return category.subCategories && category.subCategories.length > 0 ? (
        <Dropdown key={category.id} className="category-dropdown">
          <Dropdown.Toggle>
            {canSelectMainCategory ? (
              /* eslint-disable-next-line */
              <a
                href="#"
                role="button"
                className="dropdown-toggle-choose text-left"
                type="submit"
                data-categoryid={category.id}
                data-categoryname={category.name}
                onClick={closeDropdownAndHandle}
              ></a>
            ) : (
              ""
            )}

            <Translator getString={category.name} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {showCategories(category.subCategories)}
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Dropdown.Item
          key={category.id}
          data-categoryid={category.id}
          data-categoryname={category.name}
          onClick={handleClick}
        >
          <Translator getString={category.name} />
        </Dropdown.Item>
      );
    });
  };

  return (
    <Dropdown key={selectedCategory.id} show={isDropdownShown}>
      <Dropdown.Toggle onClick={() => setIsDropdownShown(!isDropdownShown)}>
        <Translator getString={selectedCategory.name} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {showCategories(categories.filter((c) => !c.parentId))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ChooseParentCategory;
