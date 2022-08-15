import classes from "./cardHandler.module.css";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

function CardHandler({ choosenArticles }) {
  return (
    <Fragment>
      <div className={`row ${classes.cardContainer}`}>
        {choosenArticles &&
          choosenArticles.map((article) => (
            <Link href={"/nutrition/" + article.id} key={article.id}>
              <div
                className={`card m-3 mx-lg-1 mx-xl-3 mx-xxl-5 col-6 col p-0  shadow ${classes.innerCard}`}
              >
                <Image
                  src={"/" + article.image}
                  width={240}
                  height={200}
                  className="card-img-top"
                  alt={article.image}
                />
                <div className="card-body pt-1">
                  <h5 className={`card-title m-0 ${classes.title}`}>
                    {article.title}
                  </h5>
                  <div className="d-flex text-secondary">
                    <i className="bi bi-calendar2 fs-5"></i>
                    <p className={`m-auto mx-2 ${classes.dateAndAuthor}`}>
                      {article.date}
                    </p>
                  </div>
                  <div className="d-flex text-secondary">
                    <i className="bi bi-person-workspace fs-5"></i>
                    <p className={`m-auto mx-2 ${classes.dateAndAuthor}`}>
                      {article.author}
                    </p>
                  </div>
                  <p
                    className={`card-text m-0 text-secondary ${classes.paragraph}`}
                  >
                    {article.shortDescription}
                  </p>
                </div>
                <hr className="mt-2 w-75 m-auto" />
                <div className="d-flex m-3 me-4 justify-content-end align-items-center">
                  <p className={`text-dark m-0 me-2 ${classes.readMore}`}>
                    Read More
                  </p>
                  <i className="bi bi-box-arrow-in-right fs-5"></i>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </Fragment>
  );
}

export default CardHandler;
