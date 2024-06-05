export async function bubbleSort(array, setArray, delay) {
  const n = array.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        setArray([...array]);
        await delay();
        swapped = true;
      }
    }
  } while (swapped);
}
