import React from "react";
import { Translator } from "../../services/languages/Laguage";

const PageNotFound = () => (
  <h1>
    {" "}
    <Translator getString="Oop, page not found!" />{" "}
  </h1>
);

export default PageNotFound;
