import { Fragment } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
