import card from "./cardHandler.module.css";
import { Fragment } from "react";
import Image from "next/image";

function CardHandler({ choosenArticles }) {
  return (
    <Fragment>
      <div className={`row ${card.cardContainer}`}>
        {choosenArticles &&
          choosenArticles.map((article) => (
            <div
              className={`card m-3 mx-lg-1 mx-xl-3 mx-xxl-5 col-6 col p-0 ${card.innerCard}`}
              key={article.id}
            >
              <Image
                src={"/" + article.image}
                width={240}
                height={200}
                className="card-img-top"
                alt={article.image}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
}

export default CardHandler;
