export const selectionSort = async (array, setArray, sleep) => {
    let arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
      setArray([...arr]);
      await sleep(10);
    }
  };
  