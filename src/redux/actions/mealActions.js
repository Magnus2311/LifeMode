import { toast } from "react-toastify";
import * as webApi from "../../api/mealsApi";
import { Translator } from "../../services/languages/Laguage";
import * as actionTypes from "../actions/actionTypes";

export function loadMealsSuccess(meals) {
  return {
    type: actionTypes.LOAD_MEALS_SUCCESS,
    meals,
  };
}

export function saveMealSuccess(meal) {
  return {
    type: actionTypes.SAVE_MEAL_SUCCESS,
    meal,
  };
}

export function loadMeals() {
  return function (dispatch) {
    dispatch({ type: actionTypes.REQUEST_LOAD_MEALS });
    webApi
      .getMeals()
      .then((meals) => {
        dispatch(loadMealsSuccess(meals));
        dispatch({ type: actionTypes.REQUEST_LOAD_MEALS_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.REQUEST_LOAD_MEALS_SUCCESS });
        toast.error(Translator({ getString: "Error on meals loading" }));
        throw error;
      });
  };
}

export function saveMeal(meal) {
  return function (dispatch) {
    dispatch({ type: actionTypes.REQUEST_SAVE_MEAL });
    webApi
      .saveMeal(meal)
      .then((meal) => {
        dispatch(saveMealSuccess(meal));
        dispatch({ type: actionTypes.REQUEST_SAVE_MEAL_SUCCESS });
        toast.success(Translator({ getString: "Meal added successsfully" }));
      })
      .catch((error) => {
        dispatch({ type: actionTypes.REQUEST_SAVE_MEAL_SUCCESS });
        toast.error(Translator({ getString: "Meal save failed!" }));
        throw error;
      });
  };
}
