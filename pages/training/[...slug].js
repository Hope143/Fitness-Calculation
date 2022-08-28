import { getFilteredTraining } from "../../helpers/api-util-training";
import TrainingSlug from "../../components/training/trainingSlug";

function Slug(props) {
  const { askedTraining, level, muscleGroup } = props;

  const values = Object.values(askedTraining);

  const training = values[0];

  return (
    <section className="py-5 p-sm-5 bg-light text-dark">
      <article className="container">
        <TrainingSlug
          level={level}
          muscleGroup={muscleGroup}
          training={training}
        />
      </article>
    </section>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const paramater = params.slug;

  const muscleGroup = paramater[0];
  const level = paramater[1];

  const askedTraining = await getFilteredTraining({ muscleGroup, level });

  return {
    props: { muscleGroup, level, askedTraining },
  };
}

export default Slug;
