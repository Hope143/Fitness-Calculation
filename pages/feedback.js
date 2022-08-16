import classes from "../components/ui/nutritionHeader.module.css";
import comment from "../components/feedback/newComment.module.css";
import CommenHandler from "../components/feedback/commentHandler";

function Feedback() {
  return (
    <div>
      <div className={`w-100 text-light text-center ${classes.topTitle}`}>
        <h2 className={`${classes.title}`}>Feedback</h2>
      </div>
      <div
        className={`p-3 bg-light text-dark position-relative ${comment.topContainer}`}
      >
        <div className="container">
          <CommenHandler />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
