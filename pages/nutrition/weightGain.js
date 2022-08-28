import NutritionHeader from "../../components/ui/nutritionHeader";
import { weightGainHandler } from "../../helpers/api-util";
import CardHandler from "../../components/nutrition/cardHandler";
import Subtitles from "../../components/ui/subTitle";

function WeightGain(props) {
  const { weightGain } = props;

  return (
    <section className="bg-light text-dark">
      <NutritionHeader title="Weight Gain" />
      <article className="my-3">
        <subheader className="px-5 py-0">
          <div className="container">
            <Subtitles subtitle="Articles" />
          </div>
        </subheader>
        <CardHandler choosenArticles={weightGain} />
      </article>
    </section>
  );
}

export async function getStaticProps() {
  const weightGain = await weightGainHandler();

  return {
    props: {
      weightGain,
    },
  };
}

export default WeightGain;
