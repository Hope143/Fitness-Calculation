import { Fragment } from "react";
import classes from "./subTitle.module.css";

const Subtitles = (props) => {
  return (
    <Fragment>
      <div className="d-flex">
        <div>
          <h3 className={` fw-bold mb-4 pe-5 ${classes.fontStyleTitle}`}>
            {props.subtitle}
          </h3>
        </div>
        <span className={`w-100 ${classes.line}`}></span>
      </div>
    </Fragment>
  );
};

export default Subtitles;
