import React from "react";
import { Translator } from "../../services/languages/Laguage";

const labelStyle = {
  textAlign: "right",
  clear: "both",
  float: "left",
  marginRight: "15px",
};

const FormLabel = ({ label, value, style }) => {
  return (
    <div
      className="form-group"
      style={{
        height: style?.height ?? "2rem",
        textAlignLast: "right",
        marginBottom: "0",
      }}
    >
      <label style={labelStyle}>
        <Translator getString={label} />
      </label>
      <div>{value}</div>
    </div>
  );
};

export default FormLabel;
