function calorieChart() {
  return (
    <>
      <div className="text-center px-lg-5">
        <label className="text-info fs-5 fw-bold">This is title</label>
        <table className="table shadow-sm">
          <thead>
            <tr className="table-primary">
              <th className="px-5" scope="col">
                Category
              </th>
              <th className="px-0 px-xl-5" scope="col">
                BMI range - kg/m2
              </th>
            </tr>
          </thead>
          <tbody className="table-secondary">
            <tr scope="row">
              <th scope="row">Under Weight</th>
              <td>&lt; This is title</td>
            </tr>
            <tr scope="row">
              <th scope="row">Health Weight</th>
              <td>This is title</td>
            </tr>
            <tr scope="row">
              <th scope="row">Over Weight</th>
              <td>This is title</td>
            </tr>
            <tr scope="row">
              <th scope="row">Obese</th>
              <td>This is title</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default calorieChart;
