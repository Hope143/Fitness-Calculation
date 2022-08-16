import classes from "./newComment.module.css";
import { useRef } from "react";

function NewComment(props) {
  const emailRef = useRef();
  const nameRef = useRef();
  const commentRef = useRef();

  function commentSubmitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredName = nameRef.current.value;
    const enteredComment = commentRef.current.value;

    props.onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  }

  return (
    <div className={`border p-3 m-auto shadow text-light ${classes.container}`}>
      <form onSubmit={commentSubmitHandler}>
        <div className="d-block d-sm-flex mb-3">
          <div className={`me-5 ${classes.emailContainer}`}>
            <label className={`me-4 fs-5 fw-bold mb-2 ${classes.emailLabel}`}>
              Your Email
            </label>
            <input
              className="form-control"
              type="email"
              ref={emailRef}
              required
            />
          </div>
          <div className={classes.emailContainer}>
            <label className={`me-4 fs-5 fw-bold mb-2 ${classes.emailLabel}`}>
              Your Name
            </label>
            <input
              className="form-control"
              type="text"
              ref={nameRef}
              required
            />
          </div>
        </div>
        <label className="me-4 fs-5 fw-bold mb-2">Comment</label>
        <div className="">
          <textarea
            className={`form-control w-75 ${classes.comment}`}
            cols="20"
            rows="4"
            ref={commentRef}
            required
          ></textarea>
        </div>
        <div className="d-flex mt-3">
          <button type="submit" className="btn btn-primary btn m-auto ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewComment;
