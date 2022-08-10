import React, { Fragment } from "react";
import styleCalorie from "../CalorieSection/calorieResult.module.css";
import FirstDietChart from "./DietChart/firstDietChart";
import SecondDietChart from "./DietChart/secondDietChart";

function DietSection({ isFormFulfilled, calorieGoal, maintainCalorie }) {
  return (
    <div className="p-0">
      <h3
        className={`text-dark fs-2 fw-bold mb-4 ${styleCalorie.fontStyleTitle}`}
      >
        Diet Recommendation
      </h3>
      <h2
        className={`text-dark fs-5 text-center fw-bold mb-4 ${styleCalorie.fontSizeSubTitle}`}
      >
        7 Day Calories Cycle (Zig-Zag)
      </h2>
      <div className="d-block p-xl-0 d-xl-flex justify-content-between ">
        <FirstDietChart
          isFormFulfilled={isFormFulfilled}
          calorieGoal={calorieGoal}
          maintainCalorie={maintainCalorie}
        />
        <SecondDietChart
          isFormFulfilled={isFormFulfilled}
          calorieGoal={calorieGoal}
          maintainCalorie={maintainCalorie}
        />
      </div>
    </div>
  );
}

export default DietSection;
