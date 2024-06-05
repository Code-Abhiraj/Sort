import React from 'react';
import { Box } from '@mui/material';

const SortingVisualizer = ({ array, darkMode }) => (
  <Box className="array-container">
    {array.map((value, idx) => (
      <Box
        className="array-bar"
        key={idx}
        style={{
          height: `${value / 1.3}px`,
          backgroundColor: `hsl(${value % 360}, 100%, ${darkMode ? '50%' : '25%'})`,
        }}
      ></Box>
    ))}
  </Box>
);

export default SortingVisualizer;
