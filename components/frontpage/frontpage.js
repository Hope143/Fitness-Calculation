import picture from "../../img/gym.jpg";
import Image from "next/image";
import frontpage from "./frontpage.module.css";

function FrontPage() {
  return (
    <section
      className="bg-dark text-light p-5 p-sm-5 p-lg-0 pt-lg-5 text-center text-sm-start"
      id="home"
    >
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between position-relative">
          <div className="d-none d-sm-block">
            <Image
              className={`img-fluid w-50 d-none d-sm-block ${frontpage.image}`}
              width="1750px"
              height="1200px"
              src={picture}
              alt="gym.jpg"
            />
          </div>
          <div
            className={`xs-position-static sm-position-absolute ${frontpage.embededText}`}
          >
            <div className="d-flex align-items-center justify-content-start h-auto w-100 p-xs-1 p-sm-5">
              <div className={`${frontpage.responsiveWidth}`}>
                <h1
                  className={`fs-1 fw-bold py-2 mt-lg-5 ${frontpage.forBorder}`}
                >
                  Become <br />{" "}
                  <span className="text-warning"> Healthy and Fit </span>
                </h1>
                <p className="lead my-xs-1 my-md-5">
                  Calculation of your BMI ( Body Mass Index ) and giving
                  reliable and factual recommendation about proper diet and
                  training that may depends on your body goal
                </p>
                <button className="btn btn-primary btn-lg">
                  <a href="#calculator" className="text-light">
                    Start your Journey <i className="bi bi-arrow-bar-right"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrontPage;
