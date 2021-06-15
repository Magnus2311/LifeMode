import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DatePicker from "react-date-picker";
import {
  getWithExpiry,
  setWithExpiry,
} from "../../../services/caching/cacheData";
import AutoCompleteBoxNew from "../../common/AutoCompleteBoxNew";
import DailyNutritionModal from "./DailyNutritionModal";
import { formatDecimalNumber } from "../../../services/helpers/numbers";
import FormLabel from "../../common/FormLabel";
import DailyNutritionSelected from "./DailyNutritionSelected";

const DailyNutritionPage = ({ products }) => {
  const NUTRITION_DAILY_DATE = "nutrition-daily-date";
  const [date, setDate] = useState(new Date());
  const [currentNutrition, setCurrentNutrition] = useState({});
  const [selectedNutritions, setSelectedNutritions] = useState([]);
  const [caloriesPerDay, setCaloriesPerDay] = useState(0);
  const [carbohydratesPerDay, setCarbohydratesPerDay] = useState(0);
  const [fatsPerDay, setFatsPerDay] = useState(0);
  const [proteinsPerDay, setProteinsPerDay] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const lastDate = getWithExpiry(NUTRITION_DAILY_DATE);
    lastDate && setDate(lastDate);
  }, []);

  const setNewDate = (date) => {
    setDate(date);
    setWithExpiry(NUTRITION_DAILY_DATE, date, 300000);
  };

  const handleAutocompleteOptionChosen = (product) => {
    setIsModalOpen(true);
    setCurrentNutrition({
      ...product,
      name: product.name + ", " + product.description,
    });
  };

  const handleAddNutrition = (nutrition) => {
    const selectedNutritionsTemp = [...selectedNutritions, nutrition];
    setAllNutritionsData(selectedNutritionsTemp);
  };

  const handleDelete = (nutrition) => {
    const selectedNutritionsTemp = [...selectedNutritions];
    var removeIndex = selectedNutritionsTemp
      .map((item) => item.id)
      .indexOf(nutrition.id);

    ~removeIndex && selectedNutritionsTemp.splice(removeIndex, 1);
    setAllNutritionsData(selectedNutritionsTemp);
  };

  const setAllNutritionsData = (selectedNutritionsTemp) => {
    setSelectedNutritions(selectedNutritionsTemp);

    if (selectedNutritionsTemp && selectedNutritionsTemp.length > 0) {
      setCaloriesPerDay(
        formatDecimalNumber(
          selectedNutritionsTemp
            .map((item) => item.calories)
            .reduce((prev, next) => +prev + +next)
        )
      );
      setCarbohydratesPerDay(
        formatDecimalNumber(
          selectedNutritionsTemp
            .map((item) => item.carbohydrates)
            .reduce((prev, next) => +prev + +next)
        )
      );
      setFatsPerDay(
        formatDecimalNumber(
          selectedNutritionsTemp
            .map((item) => item.fats)
            .reduce((prev, next) => +prev + +next)
        )
      );
      setProteinsPerDay(
        formatDecimalNumber(
          selectedNutritionsTemp
            .map((item) => item.proteins)
            .reduce((prev, next) => +prev + +next)
        )
      );
    } else {
      setCaloriesPerDay(formatDecimalNumber(0));
      setCarbohydratesPerDay(formatDecimalNumber(0));
      setFatsPerDay(formatDecimalNumber(0));
      setProteinsPerDay(formatDecimalNumber(0));
    }
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
            marginTop: "1rem",
            display: "grid",
            gridColumnGap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          }}
        >
          <FormLabel label="Total calories: " value={caloriesPerDay} />
          <FormLabel
            label="Total carbohydrates: "
            value={carbohydratesPerDay}
          />
          <FormLabel label="Total fats: " value={fatsPerDay} />
          <FormLabel label="Total proteins: " value={proteinsPerDay} />
        </div>
      </div>
      <AutoCompleteBoxNew
        handleSubmit={handleAutocompleteOptionChosen}
        data={products}
        clearOnSelect={true}
      />
      <DailyNutritionModal
        nutrition={currentNutrition}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onAdd={handleAddNutrition}
      />
      {selectedNutritions &&
        selectedNutritions.map((nutrition) => {
          return (
            <DailyNutritionSelected
              nutrition={nutrition}
              handleDelete={handleDelete}
            />
          );
        })}
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
