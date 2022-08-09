import "../styles/globals.css";
import "../components/frontpage";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // Place this in the pages/_app.js file
  //However, components that need Javascript like dropdown, collapse, accordion, carousel. therefore you need this useEffect
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
