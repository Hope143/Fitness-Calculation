import { Fragment } from "react";

function bmiResult({ bmiResult, bmiBoy, bmiGirl }) {
  const underWeight = <p className="text-primary mb-0">UnderWeight</p>;
  const healthyWeight = <p className="text-success mb-0">HealthyWeight</p>;
  const overWeight = <p className="text-warning mb-0">OverWeight</p>;
  const obesity = (
    <p style={{ color: "orange", marginBottom: "0px" }}>Obesity</p>
  );

  function BmiResultAdult() {
    if (bmiResult <= 18.49) {
      return <>{underWeight}</>;
    } else if (bmiResult >= 18.5 && bmiResult <= 24.99) {
      return <>{healthyWeight}</>;
    } else if (bmiResult >= 25 && bmiResult <= 29.99) {
      return <>{overWeight}</>;
    } else if (bmiResult >= 30 && bmiResult <= 34.99) {
      return <>{obesity}</>;
    } else if (bmiResult >= 35) {
      return <p className="text-danger mb-0">Extremely Obesity</p>;
    }
  }

  function BmiResultBoy() {
    if (bmiResult <= 19.19) {
      return <>{underWeight}</>;
    } else if (bmiResult >= 19.2 && bmiResult <= 26.99) {
      return <>{healthyWeight}</>;
    } else if (bmiResult >= 27 && bmiResult <= 30.59) {
      return <>{overWeight}</>;
    } else if (bmiResult >= 30.6) {
      return <>{obesity}</>;
    }
  }

  function BmiResultGirl() {
    if (bmiResult <= 17.8) {
      return <>{underWeight}</>;
    } else if (bmiResult >= 17.81 && bmiResult <= 26.4) {
      return <>{healthyWeight}</>;
    } else if (bmiResult >= 26.41 && bmiResult <= 31.8) {
      return <>{overWeight}</>;
    } else if (bmiResult >= 31.81) {
      return <>{obesity}</>;
    }
  }

  function ResultHandler() {
    if (bmiBoy) {
      return BmiResultBoy();
    } else if (bmiGirl) {
      return BmiResultGirl();
    } else {
      return BmiResultAdult();
    }
  }

  return <Fragment>{ResultHandler()}</Fragment>;
}

export default bmiResult;
