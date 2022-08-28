import footerStyle from "./footer.module.css";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter().pathname;

  const home = router === "/";

  return (
    <footer className="bg-dark text-light px-3 py-5 px-sm-5 py-sm-5 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className={`${footerStyle.footerLogoFont}`}>Fitness.Guide</h2>
            <p>
              This website is meant to give you an idea on how
              <br className={footerStyle.brTag} /> to properly track your
              Calorie based on your desired objective.
            </p>
          </div>

          <ul
            className={`list-unstyled col-4 col-md-2 py-1 ${footerStyle.infoFont}`}
          >
            <li className="pb-1">SITE MAP</li>
            <li className="pb-1">FITNESS FAQ</li>
            <li>SUBMIT A TICKET</li>
          </ul>
          <ul
            className={`list-unstyled col-4 col-md-2 py-1 ${footerStyle.infoFont}`}
          >
            <li className="pb-1">SERVICES</li>
            <li className="pb-1">SUPPORT</li>
            <li>REFERENCES</li>
          </ul>
          <ul
            className={`list-unstyled col-4 col-md-2 py-1 ${footerStyle.infoFont}`}
          >
            <li className="pb-1">ABOUT US</li>
            <li className="pb-1">CONTACT US</li>
            <li className="pb-1">AFFILIATES</li>
            <li>RESOURCES</li>
          </ul>
        </div>
        <hr className="mb-0" />
        <div className="d-flex justify-content-center">
          <a
            href="https://www.linkedin.com/in/victor-jr-higoy-6a770320b"
            className={`${footerStyle.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin p-3 fs-4  pe-none"></i>
          </a>
          <a
            href="https://www.facebook.com/victor.higoy000/"
            target="_blank"
            rel="noreferrer"
            className={`${footerStyle.facebook}`}
          >
            <i className="bi bi-facebook p-3 fs-4"></i>
          </a>
          <a
            href="https://www.instagram.com/victorhigoy_/"
            className={`${footerStyle.instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram p-3 fs-4"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCFh3pDZZVNATBIk4sfJqWNw"
            className={`${footerStyle.youtube}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-youtube p-3 fs-4"></i>
          </a>
          <a href="" className={`${footerStyle.twitter}`} target="_blank">
            <i className="bi bi-twitter p-3 fs-4"></i>
          </a>
        </div>
        <p className={`text-center pt-2 ${footerStyle.copyRight}`}>
          Fitness Guide <i className="bi bi-c-circle"></i> 2022
        </p>
        <div className={`${footerStyle.buttonUp}`}>
          <button
            type="button"
            className="btn btn-secondary btn-lg rounded-circle"
          >
            <a className="text-light" href={home ? "/#home" : "/nutrition"}>
              <i className="bi bi-arrow-up-circle fs-2"></i>
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
