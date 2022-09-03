import { useState } from "react";
import Subtitles from "../ui/subTitle";

function questions() {
  const items = [
    {
      title: "What is BMI (Body Mass Index) ?",
      headingNumber: "flush-headingOne",
      collapseNumber: "flush-collapseOne",
      description:
        "Body mass index (BMI) is a person's weight in kilograms divided by the square of height in meters. BMI is an inexpensive and easy screening method for weight category—underweight, healthy weight, overweight, and obesity. BMI does not measure body fat directly, but BMI is moderately correlated with more direct measures of body fat. Furthermore, BMI appears to be as strongly correlated with various metabolic and disease outcome as are these more direct measures of body fatness. - Centers for Disease Control and Prevention",
    },
    {
      title: "What is BMR (Basal Metabolic Rate) ?",
      headingNumber: "flush-headingTwo",
      collapseNumber: "flush-collapseTwo",
      description:
        " Basal metabolic rate (BMR) is the total number of calories your body needs to perform essential, life-sustaining functions. Knowing your basal metabolic rate helps you determine the estimated baseline amount of calories your body requires to function. This works as a starting point to determine how many calories you may want to consume based on your goals. Below, learn more about basal metabolic rate and how it applies to you. - Anisha Shah, MD",
    },
    {
      title: "What is 7 Day Calories Cycle (Zig-Zag Diet) ?",
      headingNumber: "headingThree",
      collapseNumber: "flush-collapseThree",
      description:
        "The Zig Zag Diet, also known as calorie shifting, involves staggering a low-calorie diet with high-calorie days. The belief is that if you can keep your body guessing, you can avoid homeostasis. By confusing your body, the hope is that your metabolism will shift into high gear burning calories more effectively. Zigzag Calorie Diet by Frankie Smith",
    },
  ];

  items.map((item, i) => {
    console.log(item.title);
  });

  return (
    <section className="p-0 pb-5 p-sm-5 bg-white text-dark" id="questions">
      <div className="container">
        <Subtitles subtitle="COMMON QUESTIONS" />
        <div
          className="accordion accordion-flush m-auto"
          style={{ maxWidth: "1000px" }}
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            {items.map((item) => {
              return (
                <>
                  <h2 className="accordion-header" id={item.headingNumber}>
                    <button
                      className="accordion-button collapsed text-secondary fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${item.collapseNumber}`}
                      aria-expanded="false"
                      aria-controls={item.collapseNumber}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id={item.collapseNumber}
                    className="accordion-collapse collapse"
                    aria-labelledby={item.headingNumber}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">{item.description}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default questions;
