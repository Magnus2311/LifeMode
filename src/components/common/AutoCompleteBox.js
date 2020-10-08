import React, { useState } from "react";
import "../../css/autocomplete.css";

const AutoCompleteBox = (props) => {
  const { data, placeholder, handleSubmit, handleChange } = props;
  const [text, setText] = useState("");
  const [options, setOptions] = useState(data);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const handleInnerChange = (event) => {
    setIsOptionsVisible(!(text === ""));
    setText(event.target.value.toLowerCase());
    setOptions(
      data.filter((item) => {
        return item.toLowerCase().includes(event.target.value.toLowerCase());
      })
    );
    if (handleChange) handleChange(event.target.value);
  };

  const handleInnerSubmit = (event) => {
    setText("");
    setIsOptionsVisible(false);
    handleSubmit(event);
  };

  return (
    <>
      <div className="autocomplete-input">
        <input
          placeholder={placeholder}
          value={text}
          className="form-control"
          onChange={handleInnerChange}
        ></input>
        <div
          className="autocomplete-options"
          style={{
            display:
              !isOptionsVisible ||
              text.length === 0 ||
              (options && options.length === 0) ||
              !options
                ? "none"
                : "block",
          }}
        >
          {options &&
            options
              .filter((item, i, ar) => ar.indexOf(item) === i)
              .map((option) => {
                return (
                  <div
                    className="autocomplete-option"
                    key={option}
                    onClick={handleInnerSubmit}
                  >
                    {option}
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default AutoCompleteBox;
