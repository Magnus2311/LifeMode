import React, { useEffect, useState } from "react";
import { formatDecimalNumber } from "../../../services/helpers/numbers";
import { Translator } from "../../../services/languages/Laguage";
import FormLabel from "../../common/FormLabel";
import FormText from "../../common/FormText";
import Modal from "../../common/Modal";

const DailyNutritionModal = ({
  nutrition,
  isModalOpen,
  setIsModalOpen,
  onAdd,
}) => {
  const { calories, carbohydrates, fats, proteins } = nutrition;
  const [weight, setWeight] = useState(100);
  const [totalCalories, setTotalCalories] = useState(calories);
  const [totalCarbohydrates, setTotalCarbohydrates] = useState(carbohydrates);
  const [totalFats, setTotalFats] = useState(fats);
  const [totalProteins, setTotalProteins] = useState(proteins);

  const handleWeightChange = (e) => {
    const currWeight = e.target.value;
    setWeight(currWeight);
    const multiplier = currWeight / 100;
    debugger;
    setTotalCarbohydrates(formatDecimalNumber(multiplier * carbohydrates));
    setTotalCalories(formatDecimalNumber(multiplier * calories));
    setTotalFats(formatDecimalNumber(multiplier * fats));
    setTotalProteins(formatDecimalNumber(multiplier * proteins));
  };

  useEffect(() => {
    const multiplier = weight / 100;
    setTotalCarbohydrates(formatDecimalNumber(multiplier * carbohydrates));
    setTotalCalories(formatDecimalNumber(multiplier * calories));
    setTotalFats(formatDecimalNumber(multiplier * fats));
    setTotalProteins(formatDecimalNumber(multiplier * proteins));
  }, [carbohydrates, weight, calories, fats, proteins]);

  const handleAddNutrition = (e) => {
    e.preventDefault();

    setIsModalOpen(false);
    onAdd({
      id: nutrition.id,
      name: nutrition.name,
      weight: weight,
      carbohydrates: totalCarbohydrates,
      fats: totalFats,
      proteins: totalProteins,
      calories: totalCalories,
    });
  };

  return (
    <Modal open={isModalOpen}>
      <FormText
        label={<Translator getString={"Nutrition"} />}
        value={nutrition.name}
        disabled
      />
      <FormText
        handleChange={handleWeightChange}
        label={<Translator getString="Weight" />}
        value={weight}
        type="number"
      />
      <FormLabel label="Calories" value={totalCalories} />
      <FormLabel label="Carbs" value={totalCarbohydrates} />
      <FormLabel label="Fats" value={totalFats} />
      <FormLabel label="Proteins" value={totalProteins} />
      <div style={{ width: "100%" }}>
        <button
          className="btn btn-danger"
          onClick={() => setIsModalOpen(false)}
          style={{ width: "50%" }}
        >
          <Translator getString="Cancel" />
        </button>
        <button
          className="btn btn-primary"
          onClick={handleAddNutrition}
          style={{ width: "50%" }}
        >
          <Translator getString="Add" />
        </button>
      </div>
    </Modal>
  );
};

export default DailyNutritionModal;
