import styleCalorie from "../CalorieSection/calorieResult.module.css";
import FirstDietChart from "./DietChart/firstDietChart";
import SecondDietChart from "./DietChart/secondDietChart";
import Subtitles from "../../ui/subTitle";

function DietSection({ isFormFulfilled, calorieGoal, maintainCalorie }) {
  return (
    <div className="p-0">
      <Subtitles subtitle="ADVICED DIET" />
      <h2
        className={`text-secondary text-center fw-bold mb-4 ${styleCalorie.fontSizeSubTitle}`}
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
