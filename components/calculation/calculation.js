import BmiResult from "./BMIsection/bmiResult";
import CalorieResult from "./CalorieSection/calorieResult";
import DietSection from "./DietSection/dietSection";
import calc from "./calculation.module.css";
import { useState } from "react";

function Calculation() {
  const [bmiResult, setBMIresult] = useState();
  const [bmrResult, setBmrResult] = useState();
  const [details, setDetails] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "",
  });
  const [isFormFulfilled, setIsFormFulFilled] = useState();
  const [maintainCalorie, setMaintainCalorie] = useState();
  const [calorieGoal, setCalorieGoal] = useState();

  return (
    <section
      id="calculator"
      className={`p-5 px-md-1 px-lg-5 bg-light text-dark ${calc.paddingCal}`}
    >
      <div className="container-lg">
        <BmiResult
          details={details}
          setDetails={setDetails}
          setBMIresult={setBMIresult}
          bmiResult={bmiResult}
          setBmrResult={setBmrResult}
        />
        <CalorieResult
          details={details}
          bmrResult={bmrResult}
          bmiResult={bmiResult}
          isFormFulfilled={isFormFulfilled}
          setIsFormFulFilled={setIsFormFulFilled}
          maintainCalorie={maintainCalorie}
          setMaintainCalorie={setMaintainCalorie}
          calorieGoal={calorieGoal}
          setCalorieGoal={setCalorieGoal}
        />
        <DietSection
          isFormFulfilled={isFormFulfilled}
          calorieGoal={calorieGoal}
          maintainCalorie={maintainCalorie}
        />
      </div>
    </section>
  );
}

export default Calculation;
