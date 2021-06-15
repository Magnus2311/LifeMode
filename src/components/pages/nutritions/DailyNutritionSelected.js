import React, { useState } from "react";
import "../../../css/dailynutrition.css";
import { Translator } from "../../../services/languages/Laguage";
import FormLabel from "../../common/FormLabel";

const labelStyle = {
  clear: "both",
  float: "left",
  marginRight: "15px",
  cursor: "pointer",
  width: "80%",
};

const DailyNutritionSelected = ({ nutrition, handleDelete }) => {
  const { name, weight, calories, fats, proteins, carbohydrates } = nutrition;
  const [isExpanded, setIsExpanded] = useState(false);

  const onDelete = () => {
    handleDelete(nutrition);
  };

  return (
    <div
      className={`daily-nutrition-selected ${
        isExpanded ? "expanded" : "collapsed"
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div
        className="form-group"
        style={{
          height: "1.5rem",
          marginBottom: "0",
          cursor: "pointer",
          display: "inline-flex",
          width: "100%",
        }}
      >
        <label style={labelStyle}>{name}</label>
        <div
          style={{
            cursor: "pointer",
            position: "relative",
            right: "20px",
            width: "4rem",
            textAlign: "right",
          }}
        >
          {weight} <Translator getString="gr" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1rem"
          height="1rem"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
          style={{
            right: "0",
            position: "absolute",
          }}
          onClick={onDelete}
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </div>
      <div
        style={{
          display: "grid",
          gridColumnGap: "3rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          fontSize: "0.8rem",
          maxHeight: isExpanded ? "20px" : "0",
          color: isExpanded ? "black" : "transparent",
          transition: isExpanded
            ? "color 0.3s 0.3s linear"
            : "color 0.1s linear",
          position: "relative",
        }}
      >
        <FormLabel
          label="Calories: "
          value={calories}
          style={{ height: "1.1rem" }}
        />
        <FormLabel
          label="Carbohydrates: "
          value={carbohydrates}
          style={{ height: "1.1rem" }}
        />
        <FormLabel label="Fats: " value={fats} style={{ height: "1.1rem" }} />
        <FormLabel
          label="Proteins: "
          value={proteins}
          style={{ height: "1.1rem" }}
        />
      </div>
    </div>
  );
};

export default DailyNutritionSelected;
