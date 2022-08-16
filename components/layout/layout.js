import { Fragment, useContext } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Notification from "../ui/notification";
import NotificationContext from "../../store/notification-context";

function Layout(props) {
  const NotificationCtx = useContext(NotificationContext);

  const activeNotification = NotificationCtx.notification;

  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
      <Footer />
    </Fragment>
  );
}

export default Layout;
