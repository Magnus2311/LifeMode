import React from "react";
import { Translator } from "../../../services/languages/Laguage";

const Home = () => {
  return (
    <div>
      <h1>
        <Translator getString="Home Page" />
      </h1>
    </div>
  );
};

export default Home;
