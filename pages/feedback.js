import NewComment from "../components/feedback/newComment";
import classes from "../components/ui/nutritionHeader.module.css";
import comment from "../components/feedback/newComment.module.css";

function Feedback() {
  return (
    <div className="h-100">
      <div className={`w-100 text-light text-center ${classes.topTitle}`}>
        <h2 className={`${classes.title}`}>Feedback</h2>
      </div>
      <div
        className={`p-3 p-sm-5 bg-light text-dark position-relative ${comment.topContainer}`}
      >
        <div className="container">
          <div>
            <NewComment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
