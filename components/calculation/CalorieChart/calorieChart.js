function calorieChart({ isFormFulfilled, bmrResult }) {
  return (
    <>
      <div
        className={`text-center px-lg-5 m-auto ${
          isFormFulfilled ? "" : "invisible"
        }`}
      >
        <label className="text-info fs-5 fw-bold">Calorie Goal</label>
        <table className="table shadow-sm">
          <thead>
            <tr className="table-primary">
              <th className="px-5" scope="col">
                Weight Goal
              </th>
              <th className="px-0 px-xl-5" scope="col">
                Calorie Goal
              </th>
            </tr>
          </thead>
          <tbody className="table-secondary">
            <tr scope="row">
              <th scope="row" className="h-100 my-auto">Maintain Weight</th>
              <td>
                <span className="fw-bold">{bmrResult}</span>{" "}
                <span className="text-secondary">100%</span> <br />
                <span className="text-secondary">Calories/day</span>
              </td>
            </tr>
            <tr scope="row">
              <th scope="row">Mild Weight Loss</th>
              <td>
                <span className="fw-bold">{bmrResult - 250}</span>{" "}
                <span className="text-secondary">90%</span> <br />
                <span className="text-secondary">Calories/day</span>
              </td>
            </tr>
            <tr scope="row">
              <th scope="row">Weight Loss</th>
              <td>
                <span className="fw-bold">{bmrResult - 500}</span>{" "}
                <span className="text-secondary">80%</span> <br />
                <span className="text-secondary">Calories/day</span>
              </td>
            </tr>
            <tr scope="row">
              <th scope="row">Extreme Weight Loss</th>
              <td>
                <span className="fw-bold">{bmrResult - 750}</span>{" "}
                <span className="text-secondary">59%</span> <br />
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
