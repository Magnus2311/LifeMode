import * as actionTypes from "../actions/actionTypes";

export default function feedbackReducers(feedbacks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_SHOPITEMFEEDBACKS_SUCCESS:
      return action.feedbacks;
    case actionTypes.ADD_SHOPITEMFEEDBACK_SUCCESS:
      return [...feedbacks, { ...action.feedback }];
    default:
      return feedbacks;
  }
}
