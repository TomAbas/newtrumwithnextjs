import React from "react";
import Footer from "./FooterPage/FooterPage/Footer";
import NavPage from "./NavPage/NavPage/NavPage";

const Layout = ({ children }) => {
  return (
    <>
      <NavPage />
      <main> {children}</main>
      <Footer />
    </>
  );
};

export default Layout;
