import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { calculateMaintananceCalories } from "../../../services/calories/caloriesCalculator";
import { calculateFatLossCalories } from "../../../services/calories/caloriesCalculator";
import { calculateExtremeFatLossCalories } from "../../../services/calories/caloriesCalculator";
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
    weight: "",
    activityType: "",
    unit: "",
  };
  const activities = [
    { key: 0, value: "Basal Metaboliv Rate (BMR)" },
    { key: 1, value: "Sedentary: Little or no exersice " },
    { key: 2, value: "Light: Exercise 1-3 times/week" },
    { key: 3, value: "Moderate: Exercise 4-5 times/week" },
    { key: 4, value: "Very active: Exercise 5-6 times/week" },
  ];

  const [calorieData, setCalorieData] = useState(emptyCalorieData);
  const [isCalculated, setIsCalculated] = useState(false);
  const [normalCalories, setNormalCalories] = useState("");
  const [fatLossCalories, setFatLossCalories] = useState("");
  const [exrtremeFatLossCalories, setExtremeFatLossCalories] = useState("");
  const [gender, setGender] = useState("");
  const [unit, setUnit] = useState("");

  const handleSubmit = (event) => {
    setCalorieData({ ...calorieData, gender: gender });
    event.preventDefault();
    setIsCalculated(true);
    var maintananceCalorie = calculateMaintananceCalories(
      event,
      calorieData,
      gender,
      unit
    );
    setNormalCalories(maintananceCalorie);
    setFatLossCalories(calculateFatLossCalories(event, maintananceCalorie));
    setExtremeFatLossCalories(
      calculateExtremeFatLossCalories(event, maintananceCalorie)
    );
    //setCalorieData(emptyCalorieData);
  };
  const handleChange = (event) => {
    setCalorieData({ ...calorieData, [event.target.name]: event.target.value });
  };
  const handleActivityChosen = (name, event) => {
    setCalorieData({ ...calorieData, activityType: event.id });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="itemsContainer ">
        <div className="split left">
          <h3>
            <Translator getString="Calorie calculator" />
          </h3>
          <div
            className="centered "
            style={{ display: "contents", marginRight: "50px" }}
          >
            <hr />
            <div style={{ display: "flex" }}>
              <div style={{ width: "20%", padding: "20px" }}>
                <label>
                  <Translator getString="Gender" />
                </label>
              </div>
              <div className="radio-btn-container">
                <RadioButton
                  label="Male"
                  value="male"
                  checked={gender}
                  setter={setGender}
                />
                <RadioButton
                  label="Female"
                  value="female"
                  checked={gender}
                  setter={setGender}
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
                    onChange={handleChange}
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
                <div className="radio-btn-container">
                  <RadioButton
                    label="Metric"
                    value="metric"
                    checked={unit}
                    setter={setUnit}
                  />
                  <RadioButton
                    label="U.S."
                    value="us"
                    checked={unit}
                    setter={setUnit}
                  />
                </div>
              </div>
              <div className="flexDiv">
                <div style={{ width: "20%", padding: "20px" }}>
                  <label>
                    <Translator getString="Height" />
                  </label>
                </div>
                <div style={{ width: "60%" }}>
                  <input
                    className="inputStyle"
                    value={calorieData.height}
                    onChange={handleChange}
                    placeholder="Enter height"
                    name="height"
                  />
                </div>
              </div>
              <div className="flexDiv">
                <div style={{ width: "20%", padding: "20px" }}>
                  <label>
                    <Translator getString="Weight" />
                  </label>
                </div>
                <div style={{ width: "60%" }}>
                  <input
                    className="inputStyle"
                    value={calorieData.weight}
                    onChange={handleChange}
                    placeholder="Enter weight"
                    name="weight"
                  />
                </div>
              </div>
              <div className="flexDiv">
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
            <Button class="button type1" type="submit" style={{ zIndex: "5" }}>
              <Translator getString="Calculate" />
            </Button>
          </div>
        </div>
        <div className="split right">
          {isCalculated ? (
            <div className="centered">
              <div>
                <h3>Daily calories</h3>
                <hr />
              </div>
              <div>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "50%", left: "0" }}>
                    <label class="informationLbl">Maintenance</label>
                  </div>
                  <div style={{ display: "grid", width: "50%", right: "0" }}>
                    <label class="calorieNumLbl"> {normalCalories}</label>
                    <label class="calorieLbl"> calories/per day</label>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "50%", left: "0" }}>
                    <label class="informationLbl">Fat Loss</label>
                  </div>
                  <div style={{ display: "grid", width: "50%", right: "0" }}>
                    <label class="calorieNumLbl"> {fatLossCalories}</label>
                    <label class="calorieLbl"> calories/per day</label>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "50%", left: "0" }}>
                    <label class="informationLbl">Extreme Loss</label>
                  </div>
                  <div style={{ display: "grid", width: "50%", right: "0" }}>
                    <label class="calorieNumLbl">
                      {" "}
                      {exrtremeFatLossCalories}
                    </label>
                    <label class="calorieLbl"> calories/per day</label>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <hr />
                <h4>How Many Calories Should I Eat?</h4>
                <p className="justifyText">
                  Fixed calorie recommendations do not work. They must be
                  customized to each individual. The calculator shows how many
                  calories you may eat in order to maintain or lose weight. Do
                  your best estimate of how much exercise you will be stick to.
                  Be honest.
                </p>
                <p className="justifyText">
                  The recommended calories include your exercise – so don’t mess
                  around with trying to adjust what you are eating each day if
                  you had a workout.
                </p>
                <p className="justifyText">
                  <b>
                    Always try to aim for the "Fat Loss" daily calorie level.
                  </b>
                </p>
                <p className="justifyText">
                  The "Extreme Fat Loss" level is effectively a rock bottom
                  calorie level. Do not attempt to immediately drop your
                  calories to this level hoping for the quick fix. This may
                  ultimately backfire. The Extreme Fat Loss level shows the
                  lowest calorie amount that can be considered. It should be
                  seen as the exception rather than the rule. It truly is better
                  to burn the fat than to starve it.
                </p>
                <h4>What happens when calories are too low?</h4>
                <ol>
                  <li>Muscle mass is broken down for energy (catabolism).</li>
                  <li>
                    Metabolic rate will begin to drop (typically) after 3 days
                    of very low calories – this is related to, and compounded by
                    the loss of muscle mass.
                  </li>
                  <li>
                    With very low calories you risk sluggishness, nutritional
                    deficiencies, fatigue, and often irritability.
                  </li>
                </ol>
              </div>
            </div>
          ) : (
            <div className="centered" style={{ margin: "50px" }}>
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
                  many calories you should be eating per day to either maintain
                  or lose weight.
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
          )}
        </div>
      </div>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    // calorieData: state.calorieData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //TO DO maybe- Да праща данните към профила
    // onLoadCalorieResult: (calorieData) => {
    //   dispatch(caloriesActions.calculateCalories(calorieData));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalorieCalculator);
