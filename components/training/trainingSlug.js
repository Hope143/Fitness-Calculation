import Image from "next/image";
import classes from "./trainingSlug.module.css";

function TrainingSlug({ training, level, muscleGroup }) {
  // const entriesKey = Object.keys(values);
  const entriesVal = Object.values(training);

  function MappedEntriesVal() {
    return entriesVal.map((data, i) => {
      return (
        <div className="d-flex justify-content-center" key={i}>
          <div className={classes.container}>
            <div className="mb-3">
              <div className="row justify-content-center">
                <h2 className={`mb-3 p-0 ${classes.title}`}>{data.title}</h2>
                <Image
                  className="img-fluid mb-3"
                  src={data.image}
                  width={602}
                  height={338}
                  alt={data.title}
                />
                <p className={`p-0 ${classes.description}`}>
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <h3 className={classes.topTitle}>
        {muscleGroup + " " + "workout" + " " + "(" + level + ")"}
      </h3>
      <div>{MappedEntriesVal()}</div>
    </div>
  );
}

export default TrainingSlug;
