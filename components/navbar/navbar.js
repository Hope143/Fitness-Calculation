import navbarStyle from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a
            href="#home"
            className={`navbar-brand p-0 ${navbarStyle.navbarFont}`}
          >
            Fitness.Guide
          </a>

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
                  className={`nav-item p-2 link-secondary ${
                    router.asPath === "/#questions"
                      ? "link-light border-bottom"
                      : ""
                  }`}
                >
                  Questions
                </li>
              </Link>
              <Link href="/nutrition" className="nav-link">
                <li
                  className={`nav-item p-2 link-secondary ${
                    router.asPath === "/training"
                      ? "link-light border-bottom"
                      : ""
                  }`}
                >
                  Nutrition
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
