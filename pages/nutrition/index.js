import { Fragment } from "react";
import nutrition from "./nutrition.module.css";
import FeaturedPosts from "../../components/nutrition/featuredPosts";

function Nutrition() {
  return (
    <Fragment>
      <div className={`w-100 text-light p-5 text-center ${nutrition.topTitle}`}>
        <h2 className={`${nutrition.title}`}>Nutrition</h2>
        <p className={`fw-lighter ${nutrition.subTitle}`}>
          Gain knoweldge and understand different lifestyle including gaining
          mass, lossing weight, and choosing the right supplements that depends
          on your objectives.
        </p>
      </div>
      <section className="p-5">
        <div className="container">
          <FeaturedPosts />
        </div>
      </section>
    </Fragment>
  );
}

export default Nutrition;
