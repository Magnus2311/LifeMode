import * as actionTypes from "../../actions/actionTypes";

export default function nutritionsReducer(nutritions = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_NUTRITIONS:
      return Object.assign({}, nutritions, {
        nutritions: [
          ...nutritions.nutritions,
          { [action.date]: action.nutritions },
        ],
      });
    case actionTypes.ADD_NUTRITION:
      return Object.assign({}, nutritions, {
        nutritions: [
          ...nutritions.nutritions,
          { [action.date]: action.nutrition },
        ],
      });
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
