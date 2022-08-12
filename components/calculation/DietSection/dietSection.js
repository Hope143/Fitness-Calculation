import React, { Fragment } from "react";
import styleCalorie from "../CalorieSection/calorieResult.module.css";
import FirstDietChart from "./DietChart/firstDietChart";
import SecondDietChart from "./DietChart/secondDietChart";

function DietSection({ isFormFulfilled, calorieGoal, maintainCalorie }) {
  return (
    <div className="p-0">
      <div className="d-flex">
        <div>
          <h3 className={` fw-bold mb-4 ${styleCalorie.fontStyleTitle}`}>
            ADVICED DIET
          </h3>
        </div>
        <span className={`w-100 ${styleCalorie.line}`}></span>
      </div>
      <h2
        className={`text-dark text-center fw-bold mb-4 ${styleCalorie.fontSizeSubTitle}`}
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
