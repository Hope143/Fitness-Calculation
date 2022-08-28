import NutritionHeader from "../../components/ui/nutritionHeader";
import { SupplementsHandler } from "../../helpers/api-util";
import CardHandler from "../../components/nutrition/cardHandler";
import Subtitles from "../../components/ui/subTitle";

function Supplements(props) {
  const { supplement } = props;

  return (
    <section className="bg-light text-dark">
      <NutritionHeader title="Supplements" />
      <article className="my-3">
        <subheader className="px-5 py-0">
          <div className="container">
            <Subtitles subtitle="Articles" />
          </div>
        </subheader>
        <CardHandler choosenArticles={supplement} />
      </article>
    </section>
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
