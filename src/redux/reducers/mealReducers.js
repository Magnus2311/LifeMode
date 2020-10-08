import * as actionTypes from "../actions/actionTypes";

export default function mealReducers(meals = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_MEALS_SUCCESS:
      return action.meals;
    case actionTypes.SAVE_MEAL_SUCCESS:
      return [...meals, { ...action.meal }];
    default:
      return meals;
  }
}
