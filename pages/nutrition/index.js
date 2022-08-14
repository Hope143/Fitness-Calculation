import { Fragment } from "react";
import FeaturedPosts from "../../components/nutrition/featuredPosts";
import { isFeaturedArticles } from "../../helpers/api-util";
import NutritionHeader from "../../components/ui/nutritionHeader";

function Nutrition(props) {
  const { isFeaturedArticles } = props;

  return (
    <Fragment>
      <NutritionHeader
        title="Nutrition"
        paragraph="Gain knoweldge and understand different lifestyle including gaining
            mass, lossing weight, and choosing the right supplements that
            depends on your objectives."
      />

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
