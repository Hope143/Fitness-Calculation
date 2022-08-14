import CardHandler from "./cardHandler";
import Subtitles from "../ui/subTitle";

function FeaturedPosts({ isFeaturedArticles }) {
  return (
    <div>
      <Subtitles subtitle="Featured Articles" />
      <CardHandler choosenArticles={isFeaturedArticles} />
    </div>
  );
}

export default FeaturedPosts;
