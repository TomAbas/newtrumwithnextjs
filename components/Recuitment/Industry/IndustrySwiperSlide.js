import React, { useState, useEffect } from "react";
import { Stack, Box, Typography, Button } from "@mui/material";

const stylesSwiperSlide = {
  border: "1px solid white",
  padding: "10px 20px",
  borderRadius: "10px",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const IndustrySwiperSlide = () => {
  return (
    <div>
      <Box sx={stylesSwiperSlide}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h6">LOGO</Typography>
          <Typography variant="overline">MM DD, YYYY</Typography>
        </Stack>
        <Box sx={{ my: "10px" }}>
          <Typography variant="caption">
            How Music Marketing Is Evolving from Viral to Virtual
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default IndustrySwiperSlide;
