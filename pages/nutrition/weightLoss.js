import NutritionHeader from "../../components/ui/nutritionHeader";
import { weightLossHandler } from "../../helpers/api-util";
import CardHandler from "../../components/nutrition/cardHandler";
import Subtitles from "../../components/ui/subTitle";

function WeightLoss(props) {
  const { weightLoss } = props;

  return (
    <section className="bg-light text-dark">
      <NutritionHeader title="Weight Loss" />
      <article className="my-3">
        <subheader className="px-5 py-0">
          <div className="container">
            <Subtitles subtitle="Articles" />
          </div>
        </subheader>
        <CardHandler choosenArticles={weightLoss} />
      </article>
    </section>
  );
}

export async function getStaticProps() {
  const weightLoss = await weightLossHandler();

  return {
    props: {
      weightLoss,
    },
  };
}

export default WeightLoss;
