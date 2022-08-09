import React from "react";

function bmiChart({ bmiBoy, bmiGirl }) {
  let titleChart,
    underWeight,
    healthWeight,
    overWeight,
    obesity,
    extremeObesity;

  if (bmiBoy) {
    titleChart = <>BMI Table for Boys (2-20)</>;
    underWeight = <>19.19</>;
    healthWeight = <>19.20 - 26.99</>;
    overWeight = <>27 - 30.59</>;
    obesity = <>&gt;= 30.6</>;
    extremeObesity = (
      <>
        <th className="invisible" scope="row"></th>
        <td className="invisible">none</td>
      </>
    );
  } else if (bmiGirl) {
    titleChart = <>BMI Table for Girls (2-20)</>;
    underWeight = <>17.80</>;
    healthWeight = <>17.81 - 26.40</>;
    overWeight = <>26.41 - 31.8</>;
    obesity = <>&gt;= 31.81</>;
    extremeObesity = (
      <>
        <th className="invisible" scope="row"></th>
        <td className="invisible">none</td>
      </>
    );
  } else {
    titleChart = <>BMI Table for Adults (21-100)</>;
    underWeight = <>18.49</>;
    healthWeight = <>18.50 - 24.99</>;
    overWeight = <>25 - 29.99</>;
    obesity = <>30 - 34.99</>;
    extremeObesity = (
      <>
        <th scope="row">Extremely Obese</th>
        <td> &gt; 35</td>
      </>
    );
  }

  return (
    <div className="text-center px-lg-5">
      <label className="text-info fs-5 fw-bold">{titleChart}</label>
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
            <td>&lt; {underWeight}</td>
          </tr>
          <tr scope="row">
            <th scope="row">Health Weight</th>
            <td>{healthWeight}</td>
          </tr>
          <tr scope="row">
            <th scope="row">Over Weight</th>
            <td>{overWeight}</td>
          </tr>
          <tr scope="row">
            <th scope="row">Obese</th>
            <td>{obesity}</td>
          </tr>
          <tr scope="row">{extremeObesity}</tr>
        </tbody>
      </table>
    </div>
  );
}

export default bmiChart;
