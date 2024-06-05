import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import SortingVisualizer from './components/SortingVisualizer';
import ControlPanel from './components/ControlPanel';
import { bubbleSort } from './algorithms/bubbleSort';
import { quickSort } from './algorithms/quickSort';
import { mergeSort } from './algorithms/mergeSort';
import { insertionSort } from './algorithms/insertionSort';
import { selectionSort } from './algorithms/selectionSort';
import { heapSort } from './algorithms/heapSort';
import { Container, Box, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

function App() {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState('bubble_sort');
  const [isSorting, setIsSorting] = useState(false);
  const [delay, setDelay] = useState(50);
  const [arraySize, setArraySize] = useState(50);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const resetArray = useCallback(() => {
    if (isSorting) return;
    const arr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 500));
    setArray(arr);
  }, [arraySize, isSorting]);

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const startSorting = async () => {
    if (isSorting) return;
    setIsSorting(true);
    if (algorithm === 'bubble_sort') {
      await bubbleSort(array, setArray, () => sleep(delay));
    } else if (algorithm === 'quick_sort') {
      await quickSort(array, setArray, () => sleep(delay));
    } else if (algorithm === 'merge_sort') {
      await mergeSort(array, setArray, () => sleep(delay));
    } else if (algorithm === 'insertion_sort') {
      await insertionSort(array, setArray, () => sleep(delay));
    } else if (algorithm === 'selection_sort') {
      await selectionSort(array, setArray, () => sleep(delay));
    }
    else if (algorithm === 'heap_sort') { 
      await heapSort(array, setArray, () => sleep(delay));
    }
    setIsSorting(false);
  };

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prevMode => !prevMode);
  }, []);

  return (
    <Container className={darkMode ? 'dark-mode' : 'light-mode'} maxWidth={false} disableGutters>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Typography variant="h4" gutterBottom className="heading">
          Sorting Algorithm Visualizer
        </Typography>
        <IconButton
          style={{ color: darkMode ? 'white' : 'black' }}
          onClick={toggleDarkMode}
        >
          <Brightness4Icon />
        </IconButton>
      </Box>
      <SortingVisualizer array={array} darkMode={darkMode} />
      <ControlPanel
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        delay={delay}
        setDelay={setDelay}
        arraySize={arraySize}
        setArraySize={setArraySize}
        isSorting={isSorting}
        startSorting={startSorting}
        resetArray={resetArray}
        darkMode={darkMode}  // Pass darkMode to ControlPanel
      />
    </Container>
  );
}

export default App;
