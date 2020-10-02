import React from "react";

const Loader = ({ isLoading }) => {
  return isLoading ? <div className="loader" /> : <></>;
};

export default Loader;
