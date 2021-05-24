import React, { useState } from "react";
import { Translator } from "../../services/languages/Laguage";
import { Dropdown } from "react-bootstrap";

const Combobox = (props) => {
  const { items, handleChoose } = props;
  const [selectedItem, setSelectedItem] = useState({
    name: <Translator getString="Choose brand" />,
    itemId: "",
  });

  const [isDropdownShown, setIsDropdownShown] = useState(false);

  const handleClick = (event) => {
    setIsDropdownShown(false);
    const itemId = event.target.getAttribute("data-itemid");
    const itemName = event.target.getAttribute("data-itemname");
    setSelectedItem({ name: itemName, itemId: itemId });
    handleChoose(itemId);
  };

  const showItems = (items) => {
    return (
      items &&
      items.map((item) => {
        return (
          <Dropdown.Item
            key={item.id}
            data-itemid={item.id}
            data-itemname={item.name}
            onClick={handleClick}
          >
            {item.name}
          </Dropdown.Item>
        );
      })
    );
  };

  return (
    <Dropdown key={selectedItem.id} show={isDropdownShown}>
      <Dropdown.Toggle onClick={() => setIsDropdownShown(!isDropdownShown)}>
        {selectedItem.name}
      </Dropdown.Toggle>
      <Dropdown.Menu>{showItems(items)}</Dropdown.Menu>
    </Dropdown>
  );
};

export default Combobox;
