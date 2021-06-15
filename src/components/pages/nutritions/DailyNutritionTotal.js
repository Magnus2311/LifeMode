import React from "react";
import { Translator } from "../../../services/languages/Laguage";

const DailyNutritionTotal = ({ value }) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "0.75rem",
        fontSize: "1.5rem",
      }}
    >
      <label style={{ fontStyle: "italic" }}>
        <Translator getString="Daily Calories: " />
      </label>
      <label style={{ marginLeft: "0.75rem", fontWeight: "700" }}>
        {value}
      </label>
    </div>
  );
};

export default DailyNutritionTotal;
