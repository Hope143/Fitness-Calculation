import CardHandler from "./cardHandler";
import Subtitles from "../ui/subTitle";

function FeaturedPosts({ isFeaturedArticles }) {
  return (
    <article>
      <Subtitles subtitle="Featured Articles" />
      <CardHandler choosenArticles={isFeaturedArticles} />
    </article>
  );
}

export default FeaturedPosts;
