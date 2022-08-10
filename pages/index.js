import Navbar from "../components/navbar/navbar";
import FrontPage from "../components/frontpage";
import Calculation from "../components/calculation/calculation";
import Footer from "../components/footer/footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <FrontPage />
      <Calculation />
      <Footer />
    </div>
  );
}

export default HomePage;
