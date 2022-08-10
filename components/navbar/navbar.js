import navbarStyle from "./frontpage.module.css";

function navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="#" className={`navbar-brand ${navbarStyle.navbarFont}`}>
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
            <ul className={`navbar-nav ms-auto well ${navbarStyle.linksFont}`}>
              <li className="nav-item">
                <a href="#learn" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#learn" className="nav-link">
                  What Youll Learn
                </a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link">
                  Questions
                </a>
              </li>
              <li className="nav-item">
                <a href="#instructors" className="nav-link">
                  Instructors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbar;
