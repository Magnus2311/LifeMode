import React from "react";

const BackButton = (props) => {
  return (
    <button
      className="btn btn-primary btn-md back-to-categories"
      onClick={props.history.goBack}
    >
      {"<<<"}
    </button>
  );
};

export default BackButton;
