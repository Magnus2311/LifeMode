import React, { useState } from "react";
import { connect } from "react-redux";
import * as caloriesActions from "../../../redux/actions/caloriesActions";
import "../../../css/calorieCalculator.css";
import { Translator } from "../../../services/languages/Laguage";
import "../../../css/categories.css";
import Dropdown from "../../common/Dropdown";
import "../../../css/radioButton.css";
import RadioButton from "../../common/RadioButton";

const CalorieCalculator = (props) => {
  const emptyCalorieData = {
    age: "",
    gender: "",
    height: "",
    weigth: "",
    activity: "",
    feetSm: "",
  };
  const activities = [
    { key: 1, value: "Sedentary: Little or no exersice " },
    { key: 2, value: "Light: Exercise 1-3 times/week" },
    { key: 3, value: "Moderate: Exercise 4-5 times/week" },
    { key: 4, value: "Very active: Exercise 5-6 times/week" },
    { key: 5, value: "" },
  ];

  const [calorieData, setCalorieData] = useState(emptyCalorieData);
  const [gender, setGender] = useState("");
  const [unit, setUnit] = useState("Metric");

  const handleCalculate = () => {};
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };
  const handleAgeChange = () => {};
  const handleHeightChange = () => {};
  const handleWeightChange = () => {};
  const handleActivityChosen = (event) => {};

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <>
      <div className="itemsContainer ">
        <div className="split left">
          <div className="centered">
            <p>
              <i>
                Here is a simple but highly accurate scientific calorie
                calculator, along with five evidence-based tips on how to
                sustainably reduce your calorie intake.
              </i>
            </p>
            <p>
              <i>
                Enter your details in the calculator below to figure out how
                many calories you should be eating per day to either maintain or
                lose weight.{" "}
              </i>
            </p>
            <p>
              <i>
                The calculator is based on the Mifflin-St Jeor equation, a
                formula that numerous studies have shown to be an accurate way
                of estimating calorie needs.
              </i>
            </p>
          </div>
        </div>

        <div className="split right">
          <div
            className="centered "
            style={{ display: "contents", marginRight: "50px" }}
          >
            <h4>
              <Translator getString="Calorie calculator" />
            </h4>
            <div style={{ display: "flex" }}>
              <div style={{ width: "20%", padding: "20px" }}>
                <label>
                  <Translator getString="Gender" />
                </label>
              </div>
              <div
                className="radio-btn-container"
                style={{ display: "flex", width: "60%", padding: "20px" }}
              >
                <RadioButton
                  changed={handleGenderChange}
                  id="1"
                  isSelected={gender === "Male"}
                  label="Male"
                  value="Male"
                />

                <RadioButton
                  changed={handleGenderChange}
                  id="2"
                  isSelected={gender === "Female"}
                  label="Female"
                  value="Female"
                />
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "20%", padding: "20px" }}>
                  <label>
                    <Translator getString="Age" />
                  </label>
                </div>
                <div style={{ width: "60%" }}>
                  <input
                    className="inputStyle"
                    value={calorieData.age}
                    handleChange={handleAgeChange}
                    placeholder="Enter age"
                    name="age"
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ width: "20%", padding: "20px" }}>
                  <label>
                    <Translator getString="Unit" />
                  </label>
                </div>
                <div
                  className="radio-btn-container"
                  style={{ display: "flex", width: "60%", padding: "20px" }}
                >
                  <RadioButton
                    changed={handleUnitChange}
                    id="3"
                    isSelected={unit === "U.S."}
                    label="U.S."
                    value="U.S."
                  />

                  <RadioButton
                    changed={handleUnitChange}
                    id="4"
                    isSelected={unit === "Metric"}
                    label="Metric"
                    value="Metric"
                  />
                </div>
              </div>
              <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "20%", padding: "20px" }}>
                  <label>
                    <Translator getString="Height" />
                  </label>
                </div>
                <div style={{ width: "60%" }}>
                  <input
                    className="inputStyle"
                    value={calorieData.height}
                    handleChange={handleHeightChange}
                    placeholder="Enter height"
                    name="height"
                  />
                </div>
              </div>
              <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "20%", padding: "20px" }}>
                  <label>
                    <Translator getString="Weight" />
                  </label>
                </div>
                <div style={{ width: "60%" }}>
                  <input
                    className="inputStyle"
                    value={calorieData.weight}
                    handleChange={handleWeightChange}
                    placeholder="Enter weight"
                    name="weight"
                  />
                </div>
              </div>
              <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "20%", padding: "20px" }}>
                  <Translator getString="Activity" />
                </div>
                <div style={{ width: "60%" }}>
                  <Dropdown
                    items={activities}
                    handleItemChosen={handleActivityChosen}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button class="button type1">
              <Translator getString="Calculate" />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // calorieData: state.calorieData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadCaloriesData: (calorieData) => {
      //   dispatch(caloriesActions.loadCaloriesData(calorieData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalorieCalculator);
