import BmiResult from "./bmiResult";
import CalorieResult from "./calorieResult";
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

  return (
    <section
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
        <CalorieResult details={details} bmrResult={bmrResult} />
      </div>
    </section>
  );
}

export default Calculation;
