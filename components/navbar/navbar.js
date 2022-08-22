import navbarStyle from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <Link href="/#home" className={`navbar-brand p-0 text-light`}>
            <p className={`p-0 m-0 ${navbarStyle.navbarFont}`}>Fitness.Guide</p>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navmenu" className="collapse navbar-collapse">
            <ul
              className={`navbar-nav ms-auto well text-light ${navbarStyle.linksFont}`}
            >
              <Link href="/#home" className="nav-link">
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#navmenu"
                  className={`nav-item p-2 link-secondary ${
                    router.asPath === "/#home"
                      ? "link-light border-bottom border-bottom"
                      : ""
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link href="/#calculator" className="nav-link">
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#navmenu"
                  className={`nav-item p-2 link-secondary ${
                    router.asPath === "/#calculator"
                      ? "link-light border-bottom"
                      : ""
                  }`}
                >
                  Calculator
                </li>
              </Link>
              <Link href="/#questions" className="nav-link">
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#navmenu"
                  className={`nav-item p-2 link-secondary ${
                    router.asPath === "/#questions"
                      ? "link-light border-bottom"
                      : ""
                  }`}
                >
                  Questions
                </li>
              </Link>
              <Link href="/training" className="nav-link">
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#navmenu"
                  className={`nav-item p-2 link-secondary ${
                    router.asPath === "/training"
                      ? "link-light border-bottom"
                      : ""
                  }`}
                  w
                >
                  Training
                </li>
              </Link>
              <Link href="/nutrition" className="nav-link">
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#navmenu"
                  className={`nav-item p-2 link-secondary ${
                    router.asPath === "/nutrition"
                      ? "link-light border-bottom"
                      : ""
                  }`}
                  w
                >
                  Nutrition
                </li>
              </Link>
              <Link href="/feedback" className="nav-link">
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#navmenu"
                  className={`nav-item p-2 link-secondary ${
                    router.asPath === "/feedback"
                      ? "link-light border-bottom"
                      : ""
                  }`}
                  w
                >
                  Feedback
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
