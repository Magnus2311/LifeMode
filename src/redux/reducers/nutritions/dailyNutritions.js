import * as actionTypes from "../../actions/actionTypes";

export default function nutritionsReducer(nutritions = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_NUTRITIONS:
      return [...action.nutritions];
    case actionTypes.ADD_NUTRITION:
      return [...nutritions, action.nutrition];
    case actionTypes.DELETE_NUTRITION:
      const nutritionToDelete = nutritions.filter(
        (n) => n.id === action.nutritionId
      );
      const index = nutritions.indexOf(nutritionToDelete);
      return [...nutritions.slice(0, index), ...nutritions.slice(index + 1)];
    default:
      return nutritions;
  }
}
