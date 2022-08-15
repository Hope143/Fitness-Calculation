import { ArticleIdHandler, getAllArticles } from "../../helpers/api-util";
import ArticleDetails from "../../components/nutrition/articleDetails";
import NutritionHeader from "../../components/ui/nutritionHeader";

function ArticleId(props) {
  const { article } = props;

  return (
    <div>
      <NutritionHeader />
      <div className="p-3 p-lg-5 pt-3 pt-xl-5  bg-light text-dark">
        <div className="container">
          <ArticleDetails article={article} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const id = context.params.articleId;
  const article = await ArticleIdHandler(id);

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const article = await getAllArticles();

  const paths = article.map((detail) => ({ params: { articleId: detail.id } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export default ArticleId;
