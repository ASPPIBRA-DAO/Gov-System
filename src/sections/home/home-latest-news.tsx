
import React from 'react';

import { Box, Typography } from '@mui/material';

export const HomeLatestNews = () => (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" component="h2" gutterBottom>
        Latest News
      </Typography>
      <Typography variant="body1">
        Read our latest news and updates.
      </Typography>
    </Box>
);
