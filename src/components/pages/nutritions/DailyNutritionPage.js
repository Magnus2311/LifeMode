import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DatePicker from "react-date-picker";
import {
  getWithExpiry,
  setWithExpiry,
} from "../../../services/caching/cacheData";
import { Translator } from "../../../services/languages/Laguage";
import AutoCompleteBoxNew from "../../common/AutoCompleteBox";

const DailyNutritionPage = ({ products }) => {
  const NUTRITION_DAILY_DATE = "nutrition-daily-date";
  const [date, setDate] = useState(new Date());
  const [caloriesPerDay, setCaloriesPerDay] = useState(2000);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const lastDate = getWithExpiry(NUTRITION_DAILY_DATE);
    lastDate && setDate(lastDate);
  }, []);

  const setNewDate = (date) => {
    setDate(date);
    setWithExpiry(NUTRITION_DAILY_DATE, date, 300000);
  };

  const handleAutocompleteOptionChoose = (event) => {
    setSearchText(event.target.textContent);
    var product = products.find(
      (product) =>
        product.name.toLowerCase() === event.target.textContent.toLowerCase()
    );
  };

  return (
    <div className="add-form">
      <div style={{ width: "100%", paddingTop: "0.5rem" }}>
        <div
          style={{
            display: "inline-flex",
            height: "2.5rem",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              margin: "0 auto",
            }}
          >
            <p>
              <i
                className="arrow arrow-left"
                onClick={() =>
                  setNewDate(new Date().setDate(new Date(date).getDate() - 1))
                }
              ></i>
            </p>
            <DatePicker
              onChange={setNewDate}
              value={date}
              format="dd.MM.yyyy"
            />
            <p>
              <i
                className="arrow arrow-right"
                onClick={() =>
                  setNewDate(new Date().setDate(new Date(date).getDate() + 1))
                }
              ></i>
            </p>
          </div>
        </div>
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
            {caloriesPerDay}
          </label>
        </div>
      </div>
      <AutoCompleteBoxNew
        handleSubmit={handleAutocompleteOptionChoose}
        data={products}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyNutritionPage);
