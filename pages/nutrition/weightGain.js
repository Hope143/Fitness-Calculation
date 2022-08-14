import NutritionHeader from "../../components/ui/nutritionHeader";
import { weightGainHandler } from "../../helpers/api-util";
import CardHandler from "../../components/nutrition/cardHandler";
import Subtitles from "../../components/ui/subTitle";

function WeightGain(props) {
  const { weightGain } = props;

  return (
    <div className="bg-light text-dark">
      <NutritionHeader title="Weight Gain" />
      <div className="my-3">
        <div className="px-5 py-0">
          <div className="container">
            <Subtitles subtitle="Articles" />
          </div>
        </div>
        <CardHandler choosenArticles={weightGain} />
      </div>
    </div>
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
