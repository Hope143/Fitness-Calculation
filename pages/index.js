import FrontPage from "../components/frontpage/frontpage";
import Calculation from "../components/calculation/calculation";
import Questions from "../components/questions/questions";

function HomePage() {
  return (
    <div>
      <FrontPage />
      <Calculation />
      <Questions />
    </div>
  );
}

export default HomePage;
