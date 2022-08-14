import NutritionHeader from "../../components/ui/nutritionHeader";
import { weightLossHandler } from "../../helpers/api-util";
import CardHandler from "../../components/nutrition/cardHandler";
import Subtitles from "../../components/ui/subTitle";

function WeightLoss(props) {
  const { weightLoss } = props;

  return (
    <div className="bg-light text-dark">
      <NutritionHeader title="Weight Loss" />
      <div className="my-3">
        <div className="px-5 py-0">
          <div className="container">
            <Subtitles subtitle="Articles" />
          </div>
        </div>
        <CardHandler choosenArticles={weightLoss} />
      </div>
    </div>
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
