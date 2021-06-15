import React, { useState } from "react";
import "../../css/autocomplete.css";

const AutoCompleteBox = (props) => {
  const {
    data,
    placeholder,
    handleSubmit,
    handleChange,
    label,
    clearOnSelect,
  } = props;
  const [text, setText] = useState("");
  const [options, setOptions] = useState(data);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInnerChange = (event) => {
    const currentText = event.target.value;
    setText(currentText);
    const tempOptions = data.filter((item) => {
      const words = (
        item.description ? item.name + ", " + item.description : item.name
      )
        .split(/[\s,]+/)
        .map((word) => word.toLowerCase());
      return currentText
        .split(/[\s,]+/)
        .every((v) => words.some((word) => word.includes(v.toLowerCase())));
    });
    setOptions(tempOptions);
    setIsDropdownOpen(
      tempOptions &&
        tempOptions.length > 0 &&
        currentText &&
        currentText.length > 0
    );
    if (handleChange) handleChange(currentText);
  };

  const handleItemClick = (e) => {
    const optionClicked = options.filter(
      (player) =>
        player.id === e.currentTarget.attributes.getNamedItem("data-id").value
    )[0];
    setText(
      optionClicked.description
        ? optionClicked.name + ", " + optionClicked.description
        : optionClicked.name
    );
    handleSubmit(optionClicked);
    setTimeout(() => setIsDropdownOpen(false), 50);
    clearOnSelect && setText("");
  };

  return (
    <>
      <div className="form-group" style={{ position: "relative" }}>
        <label>{label}</label>
        <input
          className="dropdown-input form-control"
          placeholder={placeholder}
          tabIndex={0}
          value={text}
          onChange={handleInnerChange}
        />
        <div
          className={`dropdown-items-container ${
            isDropdownOpen ? "active" : "inactive"
          }`}
          style={{ position: "absolute" }}
        >
          {isDropdownOpen &&
            options &&
            options.slice(0, 20).map((option) => {
              return (
                <div
                  className="dropdown-item"
                  key={option.id}
                  data-id={option.id}
                  onClick={handleItemClick}
                  style={{
                    display: "inline-flex",
                    position: "relative",
                    paddingLeft: "0",
                  }}
                >
                  {option.description
                    ? option.name + ", " + option.description
                    : option.name}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default AutoCompleteBox;
