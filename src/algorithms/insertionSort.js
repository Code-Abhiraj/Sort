export const insertionSort = async (array, setArray, sleep) => {
    let arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        setArray([...arr]);
        await sleep(10);
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await sleep(10);
    }
  };
  