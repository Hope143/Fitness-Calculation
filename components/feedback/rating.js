import React, { useState } from "react";
import classes from "./rating.module.css";
import { FaStar } from "react-icons/fa";

function Rating({ starValue, setStarValue }) {
  const stars = [1, 2, 3, 4, 5];

  const [hover, setHover] = useState(null);

  return (
    <div className="">
      {stars.map((start, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              className="d-none"
              required
              value={ratingValue}
              onClick={() => {
                setStarValue(ratingValue);
              }}
            />
            <FaStar
              size={30}
              className={`${classes.star} ${
                ratingValue <= (hover || starValue) ? classes.bgstar : ""
              }`}
              onMouseEnter={() => {
                setHover(ratingValue);
              }}
              onMouseLeave={() => {
                setHover(null);
              }}
            ></FaStar>
          </label>
        );
      })}
    </div>
  );
}

export default Rating;
