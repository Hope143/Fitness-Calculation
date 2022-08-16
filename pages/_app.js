import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import Layout from "../components/layout/layout";
import { NotificationContextProvider } from "../store/notification-context";

function MyApp({ Component, pageProps }) {
  // Place this in the pages/_app.js file
  //However, components that need Javascript like dropdown, collapse, accordion, carousel. therefore you need this useEffect
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
