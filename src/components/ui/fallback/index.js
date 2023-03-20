import React from 'react';
import { Box, Typography } from '@mui/material';

function FallbackComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h3" component="h1">
        Oops! Something went wrong.
      </Typography>
    </Box>
  );
}

export default FallbackComponent;

