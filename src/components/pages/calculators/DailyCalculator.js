import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import * as webApi from "../../../redux/actions/mealActions";
import { Translator } from "../../../services/languages/Laguage";
import AutoCompleteBox from "../../common/AutoCompleteBox";
import FormText from "../../common/FormText";
import "../../../css/meals.scss";

const DailyCalculator = (props) => {
  const { onAddMeal, products } = props;
  const [meal, setMeal] = useState({});
  const [searchText, setSearchText] = useState("");
  const [chosenProducts, setChosenProducts] = useState([]);

  const handleChange = (event) => {
    setMeal({ ...meal, [event.target.name]: event.target.value });
  };

  const handleAutocompleteOptionChoose = (event) => {
    setSearchText("");
    var product = products.find(
      (product) =>
        product.name.toLowerCase() +
          " - " +
          product.description.toLowerCase() ===
        event.target.textContent.toLowerCase()
    );

    if (chosenProducts[product.name + " - " + product.description])
      chosenProducts[product.name + " - " + product.description].qtty += 0.1;
    else
      chosenProducts.push({
        key: product.name + " - " + product.description,
        value: { product, qtty: 0.1 },
      });
    setChosenProducts(...chosenProducts);
  };

  const handleAutocompleteTextChanged = (text) => {
    setSearchText(text);
  };

  return (
    <div className="meal-container">
      <form method="post">
        <h1>
          <Translator getString="Add meal" />
        </h1>
        <FormText
          label={<Translator getString="Name" />}
          type="text"
          name="name"
          placeholder="Enter meal name"
          value={meal.name}
          handleChange={handleChange}
        />
        <div className="form-group">
          <label>
            <Translator getString="Продукт" />
          </label>
          <AutoCompleteBox
            textValue={searchText}
            handleSubmit={handleAutocompleteOptionChoose}
            handleChange={handleAutocompleteTextChanged}
            data={products.map((product) => {
              return product.name + " - " + product.description;
            })}
          />
        </div>
      </form>
      {Object.entries(chosenProducts).forEach(([key, value]) => {
        return (
          <div>
            <div>{key}</div>
            <div>{value.qtty}</div>
          </div>
        );
      })}
      {chosenProducts && (
        <div className="meal-products-list">
          <div className="meal-products-values">
            <div>
              <div>
                <Translator getString="Carbs" />
              </div>
              <div>
                {Math.round(
                  (Object.values(chosenProducts)
                    .forEach((p) => {
                      debugger;
                      return p["value"]["product"];
                    })
                    .reduce((a, b) => a + (b["carbohydrates"] || 0), 0) +
                    Number.EPSILON) *
                    100
                ) / 100}
              </div>
            </div>
            <div>
              <div>
                <Translator getString="Fats" />
              </div>
              <div>
                {Math.round(
                  (chosenProducts.reduce((a, b) => a + (b["fats"] || 0), 0) +
                    Number.EPSILON) *
                    100
                ) / 100}
              </div>
            </div>
            <div>
              <div>
                <Translator getString="Calories" />
              </div>
              <div>
                {Math.round(
                  (chosenProducts.reduce(
                    (a, b) => a + (b["calories"] || 0),
                    0
                  ) +
                    Number.EPSILON) *
                    100
                ) / 100}
              </div>
            </div>
            <div>
              <div>
                <Translator getString="Proteins" />
              </div>
              <div>
                {Math.round(
                  (chosenProducts.reduce(
                    (a, b) => a + (b["proteins"] || 0),
                    0
                  ) +
                    Number.EPSILON) *
                    100
                ) / 100}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMeal: (meal) => {
      dispatch(webApi.saveMeal(meal));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyCalculator);
