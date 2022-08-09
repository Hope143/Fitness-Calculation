import { useEffect, useState } from "react";

function calorieChart({ isFormFulfilled, maintainCalorie, calorieGoal }) {
  const calorieDeficit = calorieGoal === "deficit";
  return (
    <>
      <div
        className={`text-center px-lg-5 ${
          isFormFulfilled ? "" : "invisible"
        }`}
      >
        <label className="text-info fs-5 fw-bold">
          Goal : {calorieDeficit ? "Calorie Deficit" : "Calorie Surplus"}
        </label>
        <table className="table shadow-sm">
          <thead>
            <tr className="table-primary">
              <th className="px-5" scope="col">
                Weight Goal
              </th>
              <th className="px-5" scope="col">
                Calorie Goal
              </th>
            </tr>
          </thead>
          <tbody className="table-secondary">
            <tr scope="row">
              <th
                scope="row"
                className="h-100 my-auto"
                style={{ backgroundColor: "#B2D3C2" }}
              >
                Maintain Weight
              </th>
              <td style={{ backgroundColor: "#B2D3C2" }}>
                <span className="fw-bold">{maintainCalorie}</span>{" "}
                <span className="text-secondary">100%</span> <br />
                <span className="text-secondary">Calories/day</span>
              </td>
            </tr>
            <tr scope="row">
              <th scope="row">
                {calorieDeficit ? "Mild Weight Loss" : "Mild Weight Gain"}{" "}
                <br />
                <span className="text-secondary fw-normal">0.25 kg/week</span>
              </th>

              <td>
                <span className="fw-bold">
                  {calorieDeficit
                    ? maintainCalorie - 250
                    : parseInt(maintainCalorie) + 250}
                </span>{" "}
                <span className="text-secondary">
                  {calorieDeficit ? "90%" : "110%"}
                </span>{" "}
                <br />
                <span className="text-secondary">Calories/day</span>
              </td>
            </tr>
            <tr scope="row">
              <th scope="row">
                {calorieDeficit ? "Weight Loss" : "Weight Gain"}
                <br />
                <span className="text-secondary fw-normal">0.50 kg/week</span>
              </th>
              <td>
                <span className="fw-bold">
                  {calorieDeficit
                    ? maintainCalorie - 500
                    : parseInt(maintainCalorie) + 500}
                </span>{" "}
                <span className="text-secondary">
                  {calorieDeficit ? "80%" : "120%"}
                </span>{" "}
                <br />
                <span className="text-secondary">Calories/day</span>
              </td>
            </tr>
            <tr scope="row">
              <th scope="row">
                {calorieDeficit ? "Extreme Weight Loss" : "Extreme Weight Gain"}
                <br />
                <span className="text-secondary fw-normal">1 kg/week</span>
              </th>
              <td>
                <span className="fw-bold">
                  {calorieDeficit
                    ? maintainCalorie - 1000
                    : parseInt(maintainCalorie) + 1000}
                </span>{" "}
                <span className="text-secondary">
                  {calorieDeficit ? "59%" : "141%"}
                </span>{" "}
                <br />
                <span className="text-secondary">Calories/day</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default calorieChart;
