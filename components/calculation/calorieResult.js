import React, { useEffect, useState } from "react";
import styleCalorie from "./calorieResult.module.css";
import CalorieChart from "./CalorieChart/calorieChart";
import InvalidModal from "./InvalidModal/invalidModal";

function CalorieResult({ details, bmrResult, bmiResult }) {
  const [value, setValue] = useState("Sedentary");
  const [isFormFulfilled, setIsFormFulFilled] = useState(false);
  const [maintainCalorie, setMaintainCalorie] = useState();

  function onDropdownChange(e) {
    setValue(e.target.value);
  }

  // console.log(Object.keys(details) === "");

  function FormFulfilled() {
    for (const key in details) {
      if (bmiResult === undefined || details[key] === "") {
        setIsFormFulFilled(false);
      } else {
        setIsFormFulFilled(true);
      }
    }
  }

  async function submitBmrHandler(event) {
    event.preventDefault();
    await FormFulfilled();
    if (value === "Sedentary") {
      const result = (bmrResult * 1.2).toFixed(0);
      setMaintainCalorie(result);
    } else if (value === "Lightly Active") {
      const result = (bmrResult * 1.375).toFixed(0);
      setMaintainCalorie(result);
    } else if (value === "Moderately Active") {
      const result = (bmrResult * 1.55).toFixed(0);
      setMaintainCalorie(result);
    } else if (value === "Very Active") {
      const result = (bmrResult * 1.725).toFixed(0);
      setMaintainCalorie(result);
    } else {
      const result = (bmrResult * 1.9).toFixed(0);
      setMaintainCalorie(result);
    }
  }

  return (
    <div>
      <h3 className="text-dark fs-2 fw-bold mt-5 mb-4">
        Calculate your Calories
      </h3>
      {/* <InvalidModal /> */}
      <div className="d-block d-md-flex justify-content-around">
        <div className={`w-50 ${styleCalorie.inputCalorieSectionWidth}`}>
          <form onSubmit={submitBmrHandler}>
            <div className="dropdown">
              <button
                className={`d-flex justify-content-between align-items-center text-start btn btn-secondary dropdown-toggle fs-5 py-2 px-3 ${styleCalorie.calorieWidth}`}
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {value}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <button
                    value="Sedentary"
                    type="button"
                    onClick={onDropdownChange}
                    className={`dropdown-item ${styleCalorie.calorieFontSize}`}
                  >
                    Sedentary (little or no exercise)
                  </button>
                </li>
                <li>
                  <button
                    value="Lightly Active"
                    type="button"
                    onClick={onDropdownChange}
                    className={`dropdown-item ${styleCalorie.calorieFontSize}`}
                  >
                    Lightly Active (light exercise/sports 1-3 days/week)
                  </button>
                </li>
                <li>
                  <button
                    value="Moderately Active"
                    type="button"
                    onClick={onDropdownChange}
                    className={`dropdown-item ${styleCalorie.calorieFontSize}`}
                  >
                    Moderately Active (moderate exercise/sports 3-5 days/week)
                  </button>
                </li>
                <li>
                  <button
                    value="Very Active"
                    type="button"
                    onClick={onDropdownChange}
                    className={`dropdown-item ${styleCalorie.calorieFontSize}`}
                  >
                    Very Active (hard exercise/sports 6-7 days/week)
                  </button>
                </li>
                <li>
                  <button
                    value="Extra Active"
                    type="button"
                    onClick={onDropdownChange}
                    className={`dropdown-item ${styleCalorie.calorieFontSize}`}
                  >
                    Extra Active (very hard exercise and a physical job)
                  </button>
                </li>
              </ul>
            </div>
            <button type="submit" className="my-3 btn btn-primary">
              Calculate
            </button>
          </form>
          <div className="row w-100 m-auto border border-white shadow text-secondary fs-5 fw-bold text-dark text-center">
            <p className="col p-2 bg-dark text-light mb-0">
              BMR Result
              <a
                data-bs-toggle="tooltip"
                aria-describedby="tooltip625190"
                title="Mifflin - St Jeor Formula"
              >
                <i className="bi bi-info-circle px-1"></i>
              </a>
              :{" "}
            </p>
            <div className="col p-2 bg-secondary text-light">
              {isFormFulfilled && <p className="mb-0">{bmrResult}</p>}
            </div>
          </div>
          <div className="row w-100 m-auto border border-white shadow text-secondary fs-5 fw-bold text-dark text-center">
            <p className="col p-2 bg-dark text-light mb-0">
              Maintain Calorie:{" "}
            </p>
            <div className="col p-2 bg-secondary text-light">
              {isFormFulfilled && <p className="mb-0">{maintainCalorie}</p>}
            </div>
          </div>
        </div>
        <div className={`pt-3 pt-md-0`}>
          <CalorieChart
            isFormFulfilled={isFormFulfilled}
            bmrResult={bmrResult}
          />
        </div>
      </div>
    </div>
  );
}

export default CalorieResult;
