import featured from "./featuredPosts.module.css";
// import picture from "../../img/nutrition";
import Image from "next/image";
import styleCalorie from "../../components/calculation/CalorieSection/calorieResult.module.css";

function FeaturedPosts({ isFeaturedArticles }) {
  console.log(isFeaturedArticles);

  return (
    <div>
      <div className="d-flex ">
        <div>
          <h3
            className={` fw-bold mb-4 pe-5 text-dark ${styleCalorie.fontStyleTitle}`}
          >
            Featured Articles
          </h3>
        </div>
        <span className={`w-100 ${styleCalorie.line}`}></span>
      </div>
      <div className={`row ${featured.cardContainer}`}>
        {isFeaturedArticles &&
          isFeaturedArticles.map((article) => (
            <div
              className={`card m-3 mx-lg-1 mx-xl-3 mx-xxl-5 col-6 col p-0 ${featured.card}`}
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
    </div>
  );
}

export default FeaturedPosts;
