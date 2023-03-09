import "../styles/globals.css";
import Layout from "../components/Layout.js";
import LayoutAdmin from "../components/LayoutAdmin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps, ...appProps }) {
  const getContent = () => {
    if (
      [`/admins`].includes(appProps.router.pathname) ||
      [`/admins/landingpage`].includes(appProps.router.pathname) ||
      [`/admins/editprojects`].includes(appProps.router.pathname) ||
      [`/admins/addprojects`].includes(appProps.router.pathname) ||
      [`/admins/recuiter`].includes(appProps.router.pathname) ||
      [`/admins/companyinfo`].includes(appProps.router.pathname)
    )
      return (
        <LayoutAdmin>
          <ToastContainer />
          <Component {...pageProps} />
        </LayoutAdmin>
      );

    return (
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    );
  };
  return (
    // <Layout>
    // <Component {...pageProps} />
    // </Layout>
    <>{getContent()}</>
  );
}

export default MyApp;
