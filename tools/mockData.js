const goods = [
  {
    id: 1,
    name: "Boiled egg",
    carbohydrates: "1.12",
    fats: "10.61",
    calories: "155",
    protein: "12.58",
  },
  {
    id: 2,
    name: "Chicken fillet",
    carbohydrates: "0",
    fats: "4.51",
    calories: "173",
    protein: "30.91",
  },
  {
    id: 3,
    name: "Pork steak",
    carbohydrates: "0",
    fats: "16.61",
    calories: "259",
    protein: "25.58",
  },
  {
    id: 4,
    name: "Asparagus",
    carbohydrates: "4.11",
    fats: "0.22",
    calories: "22",
    protein: "2.40",
  },
  {
    id: 5,
    name: "Avocado",
    carbohydrates: "5.83",
    fats: "14.66",
    calories: "160",
    protein: "2",
  },
  {
    id: 6,
    name: "Potatoes",
    carbohydrates: "21.55",
    fats: "0.10",
    calories: "93",
    protein: "1.96",
  },
  {
    id: 7,
    name: "Rise",
    carbohydrates: "28.73",
    fats: "0.19",
    calories: "126",
    protein: "2.36",
  },
  {
    id: 8,
    name: "Onion",
    carbohydrates: "9.34",
    fats: "0.10",
    calories: "40",
    protein: "1.10",
  },
  {
    id: 9,
    name: "Lettuce",
    carbohydrates: "2.87",
    fats: "0.15",
    calories: "15",
    protein: "1.36",
  },
  {
    id: 10,
    name: "French fries",
    carbohydrates: "25.59",
    fats: "6.24",
    calories: "167",
    protein: "2.16",
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  goods,
};