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
              <li
                className={`mx-2 px-4 py-1 rounded-0 ${nutrition.articleLinks}`}
              >
                <Link href="/nutrition/healthylifestyle">
                  <a className="text-light">Healthy Lifestyle</a>
                </Link>
              </li>

              <li className={`mx-2 px-4 py-1 ${nutrition.articleLinks}`}>
                <Link href="/nutrition/weightLoss">
                  <a className="text-light">Weight Loss</a>
                </Link>
              </li>

              <li className={`mx-2 px-4 py-1 ${nutrition.articleLinks}`}>
                <Link href="/nutrition/weightGain">
                  <a className="text-light">Weight Gain</a>
                </Link>
              </li>
              <li
                className={`mx-2 px-4 py-1 rounded-0 ${nutrition.articleLinks}`}
              >
                <Link href="/nutrition/supplements">
                  <a className="text-light">Supplements</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default NutritionHeader;
