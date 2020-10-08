import React from "react";
const FormText = (props) => {
  return (
    <div className="form-group">
      <label className="form-label">{props.label}</label>
      <input
        className="form-control"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default FormText;
