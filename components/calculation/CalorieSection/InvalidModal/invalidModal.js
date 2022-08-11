import React from "react";

function InvalidModal({ isFormFulfilled }) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-3" id="exampleModalLabel">
              Warning{" "}
              <i className="bi bi-exclamation-triangle-fill text-warning fs-3"></i>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Please fill-out the form and calculate it accordingly before
            proceeding here in Calorie Calculation section. Thank You!{" "}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <a href="#bmiForm">Close</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvalidModal;
