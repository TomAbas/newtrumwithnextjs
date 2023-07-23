import React, { useState, useEffect } from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';

const stylesSwiperSlide = {
  border: '1px solid white',
  padding: '10px 20px',
  borderRadius: '10px',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  color: '#fff',
};

const IndustrySwiperSlide = ({ item }) => {
  const displayDate = (date) => {
    // MM DD, YYYY
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString('en-US', { month: 'numeric' });
    const day = dateObj.toLocaleString('en-US', { day: 'numeric' });
    const year = dateObj.toLocaleString('en-US', { year: 'numeric' });
    return `${month} ${day}, ${year}`;
  };
  return (
    <div>
      <Box sx={stylesSwiperSlide}>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Typography variant='h6'>{item.title}</Typography>
          <Typography variant='overline'>{displayDate(item.date)}</Typography>
        </Stack>
        <Box sx={{ my: '10px' }}>
          <Typography variant='caption'>{item.description}</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default IndustrySwiperSlide;
