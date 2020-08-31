import React, { useState } from "react";
import "../../css/autocomplete.css";
import { Translator } from "../../services/languages/Laguage";

const AutoCompleteBox = (props) => {
  const { data, placeholder, handleSubmit, handleChange } = props;
  const [text, setText] = useState("");
  const [options, setOptions] = useState(data);

  const handleInnerChange = (event) => {
    setText(event.target.value);
    debugger;
    setOptions(
      data.filter((item) => {
        var str = <Translator getString={item} />;
        return item && str === event.target.value;
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
            display: text.length === 0 ? "none" : "block",
          }}
        >
          {options.map((option) => {
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
