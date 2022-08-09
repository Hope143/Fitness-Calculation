import Navbar from "../components/navbar/navbar";
import FrontPage from "../components/frontpage";
import Calculation from "../components/calculation/calculation";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <Navbar />
      <FrontPage />
      <Link href="/calculate">
        <Calculation />
      </Link>
    </div>
  );
}

export default HomePage;
