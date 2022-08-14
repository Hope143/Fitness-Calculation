import NutritionHeader from "../../components/ui/nutritionHeader";
import { SupplementsHandler } from "../../helpers/api-util";
import CardHandler from "../../components/nutrition/cardHandler";
import Subtitles from "../../components/ui/subTitle";

function Supplements(props) {
  const { supplement } = props;

  return (
    <div className="bg-light text-dark">
      <NutritionHeader title="Supplements" />
      <div className="my-3">
        <div className="px-5 py-0">
          <div className="container">
            <Subtitles subtitle="Articles" />
          </div>
        </div>
        <CardHandler choosenArticles={supplement} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const supplement = await SupplementsHandler();

  return {
    props: {
      supplement,
    },
  };
}

export default Supplements;
