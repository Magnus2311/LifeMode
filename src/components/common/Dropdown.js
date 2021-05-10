import React, { useState } from "react";
import "../../css/dropdown.css";
import "../../css/calorieCalculator.css";

const Dropdown = ({ items, handleItemChosen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [shownItems, setShownItems] = useState(items);

  const handleInputFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleItemClick = (e) => {
    setInputText(e.currentTarget.innerHTML);
    handleItemChosen(e.currentTarget.innerText);
  };

  const handleOnBlur = () => {
    setTimeout(() => setIsDropdownOpen(false), 50);
  };

  return (
    <div
      onFocus={handleInputFocus}
      onBlur={handleOnBlur}
      style={{
        zIndex: 1,
        position: "relative",
      }}
    >
      <input
        className="dropdown2-input form-control inputStyle"
        placeholder="Select activity type"
        value={inputText}
      />
      <div
        className="dropdown2-items-container"
        style={{
          maxHeight: isDropdownOpen ? "200px" : "0px",
        }}
      >
        {shownItems.map((item) => (
          <div
            className="dropdown2-item"
            key={item.key}
            onClick={handleItemClick}
            style={{
              maxHeight: isDropdownOpen ? "38px" : "0px",
              visibility: isDropdownOpen ? "visible" : "collapse",
              borderStyle: isDropdownOpen ? "ridge" : "none",
            }}
          >
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
