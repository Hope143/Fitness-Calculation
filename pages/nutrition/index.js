import { Fragment } from "react";
import nutrition from "./nutrition.module.css";
import FeaturedPosts from "../../components/nutrition/featuredPosts";
import { isFeaturedArticles } from "../../helpers/api-util";

function Nutrition(props) {
  const { isFeaturedArticles } = props;
  console.log(isFeaturedArticles);
  return (
    <Fragment>
      <div className={`w-100 text-light text-center ${nutrition.topTitle}`}>
        <div className="container">
          <h2 className={`${nutrition.title}`}>Nutrition</h2>
          <p className={`fw-lighter ${nutrition.subTitle}`}>
            Gain knoweldge and understand different lifestyle including gaining
            mass, lossing weight, and choosing the right supplements that
            depends on your objectives.
          </p>
          <div className="mt-3 m-2">
            <ul
              className={`list-group list-unstyled list-group-horizontal mt-5 ${nutrition.unorderedlist}`}
            >
              <li
                className={`mx-2 px-4 py-1 rounded-0 ${nutrition.articleLinks}`}
              >
                Healthy Lifestyle
              </li>
              <li className={`mx-2 px-4 py-1 ${nutrition.articleLinks}`}>
                Weight Loss
              </li>

              <li className={`mx-2 px-4 py-1 ${nutrition.articleLinks}`}>
                Weight Gain
              </li>
              <li
                className={`mx-2 px-4 py-1 rounded-0 ${nutrition.articleLinks}`}
              >
                Supplements
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="px-2 pb-5 bg-light text-dark">
        <div className="container">
          <FeaturedPosts isFeaturedArticles={isFeaturedArticles} />
        </div>
      </section>
    </Fragment>
  );
}

export async function getStaticProps() {
  const articles = await isFeaturedArticles();

  return {
    props: {
      isFeaturedArticles: articles,
    },
  };
}

export default Nutrition;
