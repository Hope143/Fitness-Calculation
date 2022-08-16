function CommenList({ comments }) {
  if (!comments || comments.length === 0) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }
  console.log(comments);

  return (
    <div className="pt-3">
      <div className="row w-100 justify-content-around m-auto">
        {comments &&
          comments.map((comment) => (
            <div className="col-5 mb-3" key={comment._id}>
              <div className="border rounded mx-5 p-3">
                <div className="d-flex">
                  <i className="fs-2 me-3 bi bi-person-circle"></i>
                  <div>
                    <h5 className="m-0">{comment.name}</h5>
                    <h5>{comment.email}</h5>
                  </div>
                </div>
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CommenList;
