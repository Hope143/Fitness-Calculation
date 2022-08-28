import FrontPage from "../components/frontpage/frontpage";
import Calculation from "../components/calculation/calculation";
import Questions from "../components/questions/questions";

function HomePage() {
  return (
    <section>
      <FrontPage />
      <Calculation />
      <Questions />
    </section>
  );
}

export default HomePage;
