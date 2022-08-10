import React, { Fragment } from "react";
import styleCalorie from "../../CalorieSection/calorieResult.module.css";

function FirstDietChart({ isFormFulfilled, calorieGoal, maintainCalorie }) {
  const calorieDeficit = calorieGoal === "deficit";
  function SundayAndSaturdayResult() {
    return (
      <Fragment>
        {/* Maintain Weight */}
        <td>
          <span className="fw-bold">
            {(maintainCalorie * 7 * 0.164).toFixed(0)}
          </span>{" "}
          <span className="text-secondary">Calories/day</span>
        </td>
        {/* Mild Weight Loss */}
        <td>
          <span className="fw-bold">
            {((maintainCalorie - 250) * 7 * 0.164).toFixed(0)}
          </span>{" "}
          <span className="text-secondary">Calories/day</span>
        </td>
        {/*Weight Loss */}
        <td>
          <span className="fw-bold">
            {((maintainCalorie - 500) * 7 * 0.164).toFixed(0)}
          </span>{" "}
          <span className="text-secondary">Calories/day</span>
        </td>
        {/* Extreme Weight Loss */}
        <td>
          <span className="fw-bold">
            {((maintainCalorie - 1000) * 7 * 0.164).toFixed(0)}
          </span>{" "}
          <span className="text-secondary">Calories/day</span>
        </td>
      </Fragment>
    );
  }

  function MondayToFridayResult() {
    return (
      <Fragment>
        {/* Maintain */}
        <td>
          <span className="fw-bold">
            {(maintainCalorie * 7 * 0.1344).toFixed(0)}
          </span>{" "}
          <span className="text-secondary">Calories/day</span>
        </td>
        {/* Mild Weight Loss */}
        <td>
          <span className="fw-bold">
            {calorieDeficit
              ? ((maintainCalorie - 250) * 7 * 0.1344).toFixed(0)
              : ((parseInt(maintainCalorie) + 250) * 7 * 0.1344).toFixed(0)}
          </span>{" "}
          <span className="text-secondary">Calories/day</span>
        </td>
        {/*Weight Loss */}
        <td>
          <span className="fw-bold">
            {calorieDeficit
              ? ((maintainCalorie - 500) * 7 * 0.1344).toFixed(0)
              : ((parseInt(maintainCalorie) + 500) * 7 * 0.1344).toFixed(0)}
          </span>{" "}
          <span className="text-secondary">Calories/day</span>
        </td>
        {/* Extremely Weight Loss */}
        <td>
          <span className="fw-bold">
            {calorieDeficit
              ? ((maintainCalorie - 1000) * 7 * 0.1344).toFixed(0)
              : ((parseInt(maintainCalorie) + 1000) * 7 * 0.1344).toFixed(0)}
          </span>{" "}
          <span className="text-secondary">Calories/day</span>
        </td>
      </Fragment>
    );
  }

  return (
    <div
      className={`text-center px-lg-3 ${isFormFulfilled ? "" : "invisible"}`}
    >
      <div>
        <h2
          className={`text-dark fs-6 text-center fw-bold mb-4 ${styleCalorie.fontSizeSubTitle}`}
        >
          Zigzag diet schedule 1
        </h2>
        <div className="table-responsive">
          <table className="table shadow-sm">
            <thead>
              <tr className="table-primary align-top">
                <th scope="col"></th>
                <th scope="col">Maintain Weight</th>
                <th scope="col">
                  {calorieDeficit ? "Mild Weight Loss" : "Mild Weight Gain"}
                </th>
                <th scope="col">
                  {calorieDeficit ? "Weight Loss" : "Weight Gain"}
                </th>
                <th scope="col">
                  {calorieDeficit
                    ? "Extreme Weight Loss"
                    : "Extreme Weight Gain"}
                </th>
              </tr>
            </thead>
            <tbody className="table-secondary">
              <tr scope="row">
                <th scope="row" className="h-100 my-auto">
                  Sunday
                </th>
                <SundayAndSaturdayResult />
              </tr>
              <tr scope="row">
                <th scope="row">Monday</th>
                <MondayToFridayResult />
              </tr>
              <tr scope="row">
                <th scope="row">Tuesday</th>
                <MondayToFridayResult />
              </tr>
              <tr scope="row">
                <th scope="row">Wednesday</th>
                <MondayToFridayResult />
              </tr>
              <tr scope="row">
                <th scope="row">Thursday</th>
                <MondayToFridayResult />
              </tr>
              <tr scope="row">
                <th scope="row">Friday</th>
                <MondayToFridayResult />
              </tr>
              <tr scope="row">
                <th scope="row">Saturday</th>
                <SundayAndSaturdayResult />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FirstDietChart;
