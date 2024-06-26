// Heapify subtree rooted at index i
async function heapify(arr, n, i, setArray, sleep) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // Left child
    let right = 2 * i + 2; // Right child
  
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) largest = left;
  
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) largest = right;
  
    // If largest is not root
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap elements
      setArray([...arr]);
      await sleep();
      // Recursively heapify the affected sub-tree
      await heapify(arr, n, largest, setArray, sleep);
    }
  }
  
  // Heap Sort function
  export async function heapSort(arr, setArray, sleep) {
    const n = arr.length;
  
    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arr, n, i, setArray, sleep);
    }
  
    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
      // Move current root to end
      [arr[0], arr[i]] = [arr[i], arr[0]];
      setArray([...arr]);
      await sleep();
      // call max heapify on the reduced heap
      await heapify(arr, i, 0, setArray, sleep);
    }
  }
  