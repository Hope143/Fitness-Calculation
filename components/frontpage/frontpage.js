import picture from "../../img/weightlift.jpg";
import Image from "next/image";
import frontpage from "./frontpage.module.css";
import Link from "next/link";

function FrontPage() {
  return (
    <section
      className="bg-dark p-auto m-auto text-light text-center text-sm-start h-100"
      id="home"
    >
      <div
        className={`d-flex justify-content-center position-relative ${frontpage.imageBgColor}`}
      >
        <div className="position-relative">
          <div className="d-none d-sm-block">
            <Image
              className={`img-fluid ${frontpage.image}`}
              width="1450px"
              height="950px"
              // width="1750px"
              // height="1200px"
              src={picture}
              alt="gym.jpg"
            />
          </div>
          <div
            className={`position-sm-absolute text-start ${frontpage.embededText}`}
          >
            <h3 className={`${frontpage.title}`}>
              BE GUIDED BEFORE GO EXHAUSTED
            </h3>
            <p
              className={`text-center text-sm-start lead my-xs-1 my-md-4 my-lg-5 ${frontpage.paragraph}`}
            >
              Computation of your BMI (Body Mass Index), BMR (Basal Metabolic
              Rate), and Calories. It also gives the ideal recommended diet to
              achieve a certain fitness goal.
            </p>
            <Link href="#calculator" className="text-light">
              <button className={`btn btn-light btn-lg ${frontpage.link}`}>
                Start your Journey <i className="bi bi-arrow-bar-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="d-sm-flex align-items-center justify-content-between">
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
        </div> */}
    </section>
  );
}

export default FrontPage;
