export function calculateMaintananceCalories(event, calorieData, gender, unit) {
  debugger;
  var result = 0;
  if (unit === "metric") {
    if (gender === "female")
      result =
        10 * calorieData.weight +
        6.25 * calorieData.height -
        5 * calorieData.age -
        161;
    else
      result =
        10 * calorieData.weight +
        6.25 * calorieData.height -
        5 * calorieData.age +
        5;
  } else {
    if (gender === "female")
      result =
        10 * calorieData.weight * 2.20462 +
        6.25 * calorieData.height * 0.393701 -
        5 * calorieData.age -
        161;
    else
      result =
        10 * calorieData.weight * 2.20462 +
        6.25 * calorieData.height * 0.393701 -
        5 * calorieData.age +
        5;
  }
  return result < 500 ? 0 : Math.round(result);
}

export function calculateFatLossCalories(event, maintananceCalorie) {
  return maintananceCalorie - 439 < 500 ? 0 : maintananceCalorie - 439;
}

export function calculateExtremeFatLossCalories(event, maintananceCalorie) {
  return maintananceCalorie - 2 * 439 < 500 ? 0 : maintananceCalorie - 2 * 439;
}
