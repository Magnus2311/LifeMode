import * as actionTypes from "../actionTypes";
import * as webApi from "../../../api/nutritions";
import { toast } from "react-toastify";

export const addNutritionSuccess = (nutrition) => {
  return {
    type: actionTypes.ADD_NUTRITION,
    nutrition,
  };
};

export const loadNutritionsSuccess = (nutritions) => {
  return {
    type: actionTypes.LOAD_NUTRITIONS,
    nutritions,
  };
};

export const deleteNutritionSuccess = (nutritionId) => {
  return {
    type: actionTypes.DELETE_NUTRITION,
    nutritionId,
  };
};

export const loadNutritions = (date) => {
  return function (dispatch) {
    return webApi
      .getDailyNutritions(date.toJSON())
      .then((response) => {
        if (response.ok) {
          response.json().then((nutritions) => {
            dispatch(loadNutritionsSuccess(nutritions));
          });
        }
      })
      .catch((error) => {
        toast.error("Loading nutritions failed!");
        console.log(error);
        throw error;
      });
  };
};

export const addNutrition = (nutrition) => {
  return function (dispatch) {
    return webApi
      .addDailyNutrition(nutrition)
      .then((nutrition) => {
        dispatch(addNutritionSuccess(nutrition));
        return nutrition;
      })
      .catch((error) => {
        toast.error("Adding nutrition failed!");
        throw error;
      });
  };
};

export const deleteNutrition = (nutritionId) => {
  return function (dispatch) {
    return webApi
      .deleteDailyNutrition(nutritionId)
      .then(() => {
        dispatch(deleteNutritionSuccess(nutritionId));
      })
      .catch((error) => {
        toast.error("Deleting nutritiion failed!");
        throw error;
      });
  };
};
