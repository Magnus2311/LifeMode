import React, { useState } from "react";
import "../../css/autocomplete.css";

const AutoCompleteBox = (props) => {
  const { data, placeholder, handleSubmit, handleChange } = props;
  const [text, setText] = useState("");
  const [options, setOptions] = useState(data);

  const handleInnerChange = (event) => {
    setText(event.target.value.toLowerCase());
    setOptions(
      data.filter((item) => {
        return item.toLowerCase().includes(event.target.value.toLowerCase());
      })
    );
    if (handleChange) handleChange(event.target.value);
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
              text.length === 0 || (options && options.length === 0) || !options
                ? "none"
                : "block",
          }}
        >
          {options &&
            options.map((option) => {
              return (
                <div
                  className="autocomplete-option"
                  key={option}
                  onClick={handleSubmit}
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
