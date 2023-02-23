import PropTypes from "prop-types";
import { useEffect } from "react";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Button,
  Drawer,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import Logo from "../Logo/Logo";
// mock
// hooks
// components
import Scrollbar from "../Scrollbar/Scrollbar";
import NavSection from "../NavSection/NavSection";
import NavConfig from "../NavConfig.js";
import { useRouter } from "next/router";
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const router = useRouter();
  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline='none' to='#'>
          <AccountStyle>
            <Box sx={{ ml: 2 }}>
              <Typography
                variant='subtitle2'
                sx={{ color: "text.primary" }}
              ></Typography>
              <Typography variant='body2' sx={{ color: "text.secondary" }}>
                Admin
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={NavConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      <Drawer
        open
        variant='persistent'
        PaperProps={{
          sx: {
            width: DRAWER_WIDTH,
            bgcolor: "background.default",
            borderRightStyle: "dashed",
          },
        }}
      >
        {renderContent}
      </Drawer>
    </RootStyle>
  );
}
