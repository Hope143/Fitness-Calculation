import classes from "../components/ui/nutritionHeader.module.css";
import comment from "../components/feedback/newComment.module.css";
import CommenHandler from "../components/feedback/commentHandler";

function Feedback() {
  return (
    <section>
      <header className={`w-100 text-light text-center ${classes.topTitle}`}>
        <h2 className={`${classes.title}`}>Feedback</h2>
      </header>
      <article
        className={`p-3 bg-light text-dark position-relative ${comment.topContainer}`}
      >
        <div className="container">
          <CommenHandler />
        </div>
      </article>
    </section>
  );
}

export default Feedback;
