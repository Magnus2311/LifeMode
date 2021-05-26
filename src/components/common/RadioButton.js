import React from "react";

const RadioButton = ({ label, value, checked, setter }) => {
  return (
    <label style={{ display: "flex", minWidth: "100px", margin: "2px" }}>
      <input
        type="radio"
        checked={checked === value}
        onChange={() => setter(value)}
        style={{ margin: "5px" }}
      />
      <span>{label}</span>
    </label>
  );
};

export default RadioButton;
