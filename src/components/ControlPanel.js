import React from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, Slider, Button, Typography } from '@mui/material';

const ControlPanel = ({
  algorithm,
  setAlgorithm,
  delay,
  setDelay,
  arraySize,
  setArraySize,
  isSorting,
  startSorting,
  resetArray,
  darkMode,  // Added darkMode prop
}) => (
  <Grid container spacing={3} justifyContent="center" alignItems="center" className="controls">
    <Grid item xs={12} sm={6} md={3}>
      <FormControl fullWidth>
        <InputLabel style={{ color: darkMode ? 'white' : 'black' }}>Algorithm</InputLabel>
        <Select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          disabled={isSorting}
          style={{ color: darkMode ? 'white' : 'black' }}
        >
          <MenuItem value="bubble_sort">Bubble Sort</MenuItem>
          <MenuItem value="quick_sort">Quick Sort</MenuItem>
          <MenuItem value="merge_sort">Merge Sort</MenuItem>
          <MenuItem value="insertion_sort">Insertion Sort</MenuItem>
          <MenuItem value="selection_sort">Selection Sort</MenuItem>
          <MenuItem value="heap_sort">Heap Sort</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Typography gutterBottom style={{ color: darkMode ? 'white' : 'black' }}>Delay (ms)</Typography>
      <Slider
        value={delay}
        min={10}
        max={200}
        onChange={(e, newValue) => setDelay(newValue)}
        disabled={isSorting}
        valueLabelDisplay="auto"
      />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Typography gutterBottom style={{ color: darkMode ? 'white' : 'black' }}>Array Size</Typography>
      <Slider
        value={arraySize}
        min={10}
        max={200}
        onChange={(e, newValue) => setArraySize(newValue)}
        disabled={isSorting}
        valueLabelDisplay="auto"
      />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Button
        variant="contained"
        color="primary"
        onClick={startSorting}
        disabled={isSorting}
        fullWidth
      >
        Start Sorting
      </Button>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Button
        variant="contained"
        color="secondary"
        onClick={resetArray}
        disabled={isSorting}
        fullWidth
      >
        Generate New Array
      </Button>
    </Grid>
  </Grid>
);

export default ControlPanel;
