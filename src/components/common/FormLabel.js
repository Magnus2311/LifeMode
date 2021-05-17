import React from "react";

const FormLabel = (props) => {
  return (
    <div className="form-group" style={props.style}>
      <label className="form-label">{props.label}</label>
      <label className="form-label">{props.value}</label>
    </div>
  );
};

export default FormLabel;
