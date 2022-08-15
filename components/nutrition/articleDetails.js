import Image from "next/image";
import classes from "./articleDetails.module.css";

function ArticleDetails({ article }) {
  const descriptions = [];

  for (const key in article.description) {
    descriptions.push({ ...article.description[key] });
  }

  function DescriptionHandler() {
    return descriptions.map((content) => (
      <div key={content.subject}>
        <h4>{content.subject}</h4>
        <p className={`${classes.details}`}>{content.details}</p>
      </div>
    ));
  }

  return (
    <div>
      <div className="row mb-3">
        <div className="col-12 col-xl-6">
          <h3 className="fs-1 mb-3">{article.title}</h3>
          <div className="mb-3">
            <div className="d-flex text-secondary">
              <i className="bi bi-calendar2 fs-5"></i>
              <p className={`m-auto mx-2 fst-italic ${classes.articleAndDate}`}>
                {article.date}
              </p>
            </div>
            <div className="d-flex text-secondary">
              <i className="bi bi-person-workspace fs-5"></i>
              <p className={`m-auto mx-2 fst-italic ${classes.articleAndDate}`}>
                {article.author}
              </p>
            </div>
          </div>
          <p className={classes.shortDescription}>{article.shortDescription}</p>
        </div>
        <div className="col-12 col-md-9 col-lg-8 col-xl-6 m-auto">
          <Image
            width={1200}
            height={700}
            src={"/" + article.image}
            alt={article.image}
          />
        </div>
      </div>
      {DescriptionHandler()}
      {/* {article &&
        descriptions.map((content) => (
          <div>
            <h4>{content.subject}</h4>
            <p>{content.details}</p>
          </div>
        ))} */}
    </div>
  );
}

export default ArticleDetails;
