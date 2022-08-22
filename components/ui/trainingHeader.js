import classes from "./trainingHeader.module.css";
import { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import TrainingHeaderHelper from "./trainingHeaderHelper";

function TrainingHeader(props) {
  const router = useRouter().pathname;
  const [onClickImage, setOnClickImage] = useState(false);
  const [value, setValue] = useState();

  const lifeStyle = router == "/nutrition/healthylifestyle";
  const weightLoss = router == "/nutrition/weightLoss";
  const weightGain = router === "/nutrition/weightGain";
  const supplements = router === "/nutrition/supplements";

  function onClickImageContainer(e) {
    setValue(e.target);

    setOnClickImage((prev) => !prev);
  }

  console.log(value);

  return (
    <Fragment>
      <div className={`w-100 text-light text-center ${classes.topTitle}`}>
        <div className="container">
          <h2 className={`${classes.title}`}>{props.title}</h2>
          <p className={`fw-lighter ${classes.subTitle}`}>{props.paragraph}</p>
          <div className="mt-3 m-2">
            <ul
              className={`list-group list-unstyled list-group-horizontal mt-5 ${classes.unorderedlist}`}
            >
              <li className="position-relative">
                <div
                  className={classes.imageContainer}
                  onClick={() => {
                    setValue("arms");
                    setOnClickImage(true);
                  }}
                >
                  <Image
                    src={"/trainingImages/arms.png"}
                    width={100}
                    height={100}
                    alt="armMuscles-photo"
                  />
                  <div className={classes.overlay}></div>
                </div>
                {value === "arms" ? (
                  <TrainingHeaderHelper
                    onClickImage={onClickImage}
                    musclePart="arms"
                  />
                ) : (
                  ""
                )}
              </li>

              <li className="position-relative">
                <div
                  className={classes.imageContainer}
                  onClick={() => {
                    setValue("chest");
                    setOnClickImage(true);
                  }}
                >
                  <Image
                    src={"/trainingImages/chestt.png"}
                    width={100}
                    height={100}
                    alt="chestMuscle-photo"
                  />
                  <div className={classes.overlay}></div>
                </div>
                {value === "chest" ? (
                  <TrainingHeaderHelper
                    onClickImage={onClickImage}
                    musclePart="chest"
                  />
                ) : (
                  ""
                )}
              </li>

              <li className="position-relative">
                <div
                  className={classes.imageContainer}
                  onClick={() => {
                    setValue("legs");
                    setOnClickImage(true);
                  }}
                >
                  <Image
                    src={"/trainingImages/legs.png"}
                    width={100}
                    height={100}
                    alt="legsMuscle-photo"
                  />
                  <div className={classes.overlay}></div>
                </div>
                {value === "legs" ? (
                  <TrainingHeaderHelper
                    onClickImage={onClickImage}
                    musclePart="legs"
                  />
                ) : (
                  ""
                )}
              </li>

              <li className="position-relative">
                <div
                  className={classes.imageContainer}
                  onClick={() => {
                    setValue("back");
                    setOnClickImage(true);
                  }}
                >
                  <Image
                    src={"/trainingImages/back.png"}
                    width={100}
                    height={100}
                    alt="backMuscle-photo"
                  />
                  <div className={classes.overlay}></div>
                </div>
                {value === "back" ? (
                  <TrainingHeaderHelper
                    onClickImage={onClickImage}
                    musclePart="back"
                  />
                ) : (
                  ""
                )}
              </li>
              <li className="position-relative">
                <div
                  className={classes.imageContainer}
                  onClick={() => {
                    setValue("fullBody");
                    setOnClickImage(true);
                  }}
                >
                  <Image
                    src={"/trainingImages/fullBody.png"}
                    width={100}
                    height={100}
                    alt="fullBodyMuscles-photo"
                  />
                  <div className={classes.overlay}></div>
                </div>
                {value === "fullBody" ? (
                  <TrainingHeaderHelper
                    onClickImage={onClickImage}
                    musclePart="fullBody"
                  />
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TrainingHeader;
