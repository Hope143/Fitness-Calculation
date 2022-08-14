import nutrition from "./nutritionHeader.module.css";
import { Fragment } from "react";
import Link from "next/link";

function NutritionHeader(props) {
  return (
    <Fragment>
      <div className={`w-100 text-light text-center ${nutrition.topTitle}`}>
        <div className="container">
          <h2 className={`${nutrition.title}`}>{props.title}</h2>
          <p className={`fw-lighter ${nutrition.subTitle}`}>
            {props.paragraph}
          </p>
          <div className="mt-3 m-2">
            <ul
              className={`list-group list-unstyled list-group-horizontal mt-5 ${nutrition.unorderedlist}`}
            >
              <Link href="/nutrition/healthylifestyle">
                <li
                  className={`mx-2 px-4 py-1 rounded-0 ${nutrition.articleLinks}`}
                >
                  Healthy Lifestyle
                </li>
              </Link>

              <Link href="/nutrition/weightLoss">
                <li className={`mx-2 px-4 py-1 ${nutrition.articleLinks}`}>
                  Weight Loss
                </li>
              </Link>
              <Link href="/nutrition/weightGain">
                <li className={`mx-2 px-4 py-1 ${nutrition.articleLinks}`}>
                  Weight Gain
                </li>
              </Link>

              <Link href="/nutrition/supplements">
                <li
                  className={`mx-2 px-4 py-1 rounded-0 ${nutrition.articleLinks}`}
                >
                  Supplements
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default NutritionHeader;
