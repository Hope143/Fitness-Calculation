import classes from "./commentList.module.css";
import { FaStar } from "react-icons/fa";

function CommenList({ comments }) {
  if (!comments || comments.length === 0) {
    return (
      <div className="d-flex justify-content-center py-3">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-3 d-flex flex-wrap justify-content-around m-auto">
      {/* <img
        src="https://randomuser.me/api/portraits/men/11.jpg"
        alt="random-svg-photo"
      /> */}

      {comments &&
        comments.map((comment, i) => (
          <div
            className={`row border rounded p-3 m-3 text-light ${classes.container}`}
            key={i}
          >
            <i className="col-2 fs-2 p-0 bi bi-person-circle"></i>
            <div className="col d-block p-0">
              <h5 className="m-0">{comment.name}</h5>
              <div className="d-flex">
                {[...Array(comment.rating)].map((star, i) => {
                  return (
                    <div className="p-1" key={i}>
                      <FaStar className={`${classes.star}`} />
                    </div>
                  );
                })}
              </div>
              {/* {() => {
                const rows = [];
                for (let i = 0; i <= comment.rating; i++) {
                  rows.push(<FaStar key={i} obj={objects[i]} />);
                  return <p>{rows[1]}</p>;
                }
              }} */}
              <p>{comment.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CommenList;
