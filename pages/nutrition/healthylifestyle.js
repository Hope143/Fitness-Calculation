import NutritionHeader from "../../components/ui/nutritionHeader";
import { HealthyLifestyleHandler } from "../../helpers/api-util";
import CardHandler from "../../components/nutrition/cardHandler";
import Subtitles from "../../components/ui/subTitle";

function HealthyLifeStyle(props) {
  const { healthyLifestyle } = props;

  return (
    <div className="bg-light text-dark">
      <NutritionHeader title="Healthy Lifestyle" />
      <div className="my-3">
        <div className="px-5 py-0">
          <div className="container">
            <Subtitles subtitle="Articles" />
          </div>
        </div>
        <CardHandler choosenArticles={healthyLifestyle} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const healthyLifestyle = await HealthyLifestyleHandler();

  return {
    props: {
      healthyLifestyle,
    },
  };
}

export default HealthyLifeStyle;
