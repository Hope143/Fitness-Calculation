import BMIresultHandler from "./BmiData/bmiData";
import BMIchart from "./BmiChart/bmiChart";
import styleCalorie from "../CalorieSection/calorieResult.module.css";
import Subtitles from "../../ui/subTitle";

function inputData({
  details,
  setDetails,
  setBMIresult,
  bmiResult,
  setBmrResult,
}) {
  const bmiBoy =
    details.age >= 2 && details.age <= 20 && details.gender === "male";
  const bmiGirl =
    details.age >= 2 && details.age <= 20 && details.gender === "female";

  function HandleChange(e) {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    const convertedHeightToMeter = details.height / 100;

    const result =
      details.weight / (convertedHeightToMeter * convertedHeightToMeter);

    const roundedResult = result.toFixed(2);

    setBMIresult(roundedResult);

    if (details.gender === "male") {
      const result = (
        10 * details.weight +
        6.25 * details.height -
        5 * details.age +
        5
      ).toFixed(0);
      setBmrResult(result);
    } else {
      const result = (
        10 * details.weight +
        6.25 * details.height -
        5 * details.age -
        161
      ).toFixed(0);
      setBmrResult(result);
    }
  }

  return (
    <div id="bmiForm">
      <Subtitles subtitle="CALCULATE BMI" />
      <div className="d-block d-md-flex justify-content-around">
        <div
          className={`w-50 me-0 me-md-2 me-lg-0 ${styleCalorie.inputCalorieSectionWidth}`}
        >
          <form onSubmit={submitHandler} className="d-block">
            <div className="d-sm-flex">
              <div className="me-sm-3">
                <label className="text-secondary me-4 fs-5 fw-bold">
                  Input Weight (kg)
                </label>
                <div className="input-group mb-3">
                  <input
                    className="form-control  fw-bold"
                    type="number"
                    step=".01"
                    placeholder="e.g. 70"
                    required
                    name="weight"
                    value={details.weight}
                    onChange={HandleChange}
                  />
                  <span className="input-group-text">kg</span>
                </div>
              </div>
              <div>
                <label className="text-secondary me-4 fs-5 fw-bold">
                  Input Height (cm)
                </label>
                <div className="input-group mb-3">
                  <input
                    className="form-control  fw-bold"
                    type="number"
                    step=".01"
                    placeholder="e.g. 170"
                    required
                    name="height"
                    value={details.height}
                    onChange={HandleChange}
                  />
                  <span className="input-group-text">cm</span>
                </div>
              </div>
            </div>
            <div className="d-sm-flex">
              <div className="me-3 w-100 w-sm-50">
                <label className="text-secondary me-4 fs-5 fw-bold">
                  Input Age
                </label>
                <div className="input-group w-100">
                  <div className="w-50">
                    <input
                      className="form-control  fw-bold"
                      type="number"
                      step=".01"
                      name="age"
                      required
                      value={details.age}
                      onChange={HandleChange}
                    />
                  </div>
                  <span className="input-group-text w-50" id="basic-addon2">
                    2-100 yrs old
                  </span>
                </div>
              </div>
              <div className="w-100 w-sm-50">
                <label className="text-secondary me-4 fs-5 fw-bold mb-2">
                  Gender
                </label>
                <div className="me-3 d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="flexRadioDefault1"
                      value="male"
                      required
                      onChange={HandleChange}
                    />
                    <label className="form-check-label me-2 fw-bold text-dark">
                      MALE
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="female"
                      required
                      id="flexRadioDefault2"
                      onChange={HandleChange}
                    />
                    <label className="form-check-label fw-bold text-dark">
                      FEMALE
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="my-3 btn btn-primary">
              Calculate
            </button>
          </form>
          <div className="row w-100 m-auto border border-white shadow text-secondary fs-5 fw-bold text-dark text-center">
            <p className="col p-2 bg-dark text-light mb-0">BMI Result: </p>
            <div className="col p-2 bg-secondary text-light">
              {bmiResult}{" "}
              {bmiResult && (
                <>
                  kg/m<sup>2</sup>
                </>
              )}{" "}
            </div>
            <div className="col p-2 mb-0">
              <BMIresultHandler
                bmiResult={bmiResult}
                bmiBoy={bmiBoy}
                bmiGirl={bmiGirl}
              />
            </div>
          </div>
        </div>
        <div className="pt-3 pt-md-0">
          <BMIchart bmiBoy={bmiBoy} bmiGirl={bmiGirl} />
        </div>
      </div>
    </div>
  );
}

export default inputData;
