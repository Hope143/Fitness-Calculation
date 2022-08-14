import styleCalorie from "../../components/calculation/CalorieSection/calorieResult.module.css";
import CardHandler from "./cardHandler";

function FeaturedPosts({ isFeaturedArticles }) {
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
      <CardHandler choosenArticles={isFeaturedArticles} />
    </div>
  );
}

export default FeaturedPosts;
