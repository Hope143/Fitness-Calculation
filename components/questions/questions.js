import questionStyle from "./questions.module.css";

function questions() {
  return (
    <section className="p-0 pb-5 p-sm-5" id="questions">
      <div className="container">
        <h3
          className={`text-dark fs-2 fw-bold mb-4 ${questionStyle.fontStyleTitle}`}
        >
          Frquently Asked Questions
        </h3>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What is BMI (Body Mass Index) ?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ textAlign: "justify" }}>
                &quot;Body mass index (BMI) is a person&apos;s weight in
                kilograms divided by the square of height in meters. BMI is an
                inexpensive and easy screening method for weight
                category—underweight, healthy weight, overweight, and obesity.
                BMI does not measure body fat directly, but BMI is moderately
                correlated with more direct measures of body fat. Furthermore,
                BMI appears to be as strongly correlated with various metabolic
                and disease outcome as are these more direct measures of body
                fatness.&quot; - Centers for Disease Control and Prevention
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What is BMR (Basal Metabolic Rate) ?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ textAlign: "justify" }}>
                &quot;Basal metabolic rate (BMR) is the total number of calories
                your body needs to perform essential, life-sustaining functions.
                Knowing your basal metabolic rate helps you determine the
                estimated baseline amount of calories your body requires to
                function. This works as a starting point to determine how many
                calories you may want to consume based on your goals. Below,
                learn more about basal metabolic rate and how it applies to
                you.&quot; - Anisha Shah, MD
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                What is 7 Day Calories Cycle (Zig-Zag Diet) ?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={{ textAlign: "justify" }}>
                &quot;The Zig Zag Diet, also known as calorie shifting, involves
                staggering a low-calorie diet with high-calorie days. The belief
                is that if you can keep your body guessing, you can avoid
                homeostasis. By confusing your body, the hope is that your
                metabolism will shift into high gear burning calories more
                effectively.&quot; Zigzag Calorie Diet by Frankie Smith
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default questions;
