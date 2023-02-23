import "../styles/globals.css";
import Layout from "../components/Layout.js";
import LayoutAdmin from "../components/LayoutAdmin";

function MyApp({ Component, pageProps, ...appProps }) {
  const getContent = () => {
    if (
      [`/admins`].includes(appProps.router.pathname) ||
      [`/admins/landingpage`].includes(appProps.router.pathname)
    )
      return (
        <LayoutAdmin>
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
