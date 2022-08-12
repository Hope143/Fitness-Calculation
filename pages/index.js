import Navbar from "../components/navbar/navbar";
import FrontPage from "../components/frontpage/frontpage";
import Calculation from "../components/calculation/calculation";
import Footer from "../components/footer/footer";
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
