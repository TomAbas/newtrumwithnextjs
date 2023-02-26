import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import DashboardNavbar from "./Admins/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "./Admins/DashboardSidebar.js/DashboardSidebar";

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  backgroundColor: "#F9FAFB",
});
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;
const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const LayoutAdmin = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <RootStyle>
        {/* <DashboardNavbar onOpenSidebar={() => setOpen(true)} /> */}
        <DashboardSidebar
          isOpenSidebar={open}
          onCloseSidebar={() => setOpen(false)}
        />
        <MainStyle>{children}</MainStyle>
      </RootStyle>
    </>
  );
};

export default LayoutAdmin;
