import "../styles/globals.css";

import Layout from "../components/Layout.js";
import LayoutAdmin from "../components/LayoutAdmin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps, ...appProps }) {
  const getContent = () => {
    if (
      // [`/admin`].includes(appProps.router.pathname) ||
      [`/admin/landingpage`].includes(appProps.router.pathname) ||
      [`/admin/editprojects`].includes(appProps.router.pathname) ||
      [`/admin/addprojects`].includes(appProps.router.pathname) ||
      [`/admin/recuiter`].includes(appProps.router.pathname) ||
      [`/admin/companyinfo`].includes(appProps.router.pathname) ||
      [`/admin/about-us`].includes(appProps.router.pathname) ||
      [`/admin/service`].includes(appProps.router.pathname) ||
      ["/admin/industry-recognition"].includes(appProps.router.pathname) ||
      ["/admin/comment"].includes(appProps.router.pathname) ||
      ["/admin/reason"].includes(appProps.router.pathname) ||
      ["/admin/news"].includes(appProps.router.pathname) ||
      ["/admin/editnews"].includes(appProps.router.pathname)
    ) {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("Authorization");
        if (!token) {
          appProps.router.push("/login");
        } else {
          return (
            <LayoutAdmin>
              <ToastContainer />
              <Component {...pageProps} />
            </LayoutAdmin>
          );
        }
      }
    } else {
      return (
        <Layout>
          <Component {...pageProps} />{" "}
        </Layout>
      );
    }
  };
  return <>{getContent()}</>;
}

export default MyApp;
