import React from "react";
import NutritionHeader from "../../components/ui/nutritionHeader";
import { weightLossHandler } from "../../helpers/api-util";
import CardHandler from "../../components/nutrition/cardHandler";

function weightLoss(props) {
  const { weightLoss } = props;

  console.log(weightLoss);

  return (
    <div className="">
      <NutritionHeader title="Weight Loss" />
      <div className="my-3">
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

export default weightLoss;
