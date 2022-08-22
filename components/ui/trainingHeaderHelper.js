import classes from "./trainingHeader.module.css";
import Link from "next/link";

function TrainingHeaderHelper({ onClickImage, musclePart }) {
  return (
    <div
      className={`${classes.listContainer} ${
        onClickImage ? "d-flex" : "d-none"
      }`}
    >
      <ul className="list-unstyled">
        <Link href={`/${musclePart}/beginner`}>
          <a>
            <li className={`py-1 px-2 fs-5 text-light ${classes.listText}`}>
              Beginner
            </li>
          </a>
        </Link>
        <hr className="m-0" />
        <Link href={`/${musclePart}/intermediate`}>
          <a>
            <li className={`py-1 px-2 fs-5 text-light ${classes.listText}`}>
              Intermediate
            </li>
          </a>
        </Link>
        <hr className="m-0" />
        <Link href={`/${musclePart}/advanced`}>
          <a>
            <li className={`py-1 px-2 fs-5 text-light ${classes.listText}`}>
              Advanced
            </li>
          </a>
        </Link>
        <hr className="m-0" />
      </ul>
    </div>
  );
}

export default TrainingHeaderHelper;
