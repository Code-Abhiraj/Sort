export async function mergeSort(array, setArray, delay) {
  const merge = async (arr, l, m, r) => {
    const n1 = m - l + 1;
    const n2 = r - m;

    const L = arr.slice(l, l + n1);
    const R = arr.slice(m + 1, m + 1 + n2);

    let i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k++] = L[i++];
      } else {
        arr[k++] = R[j++];
      }
      setArray([...arr]);
      await delay();
    }

    while (i < n1) {
      arr[k++] = L[i++];
      setArray([...arr]);
      await delay();
    }

    while (j < n2) {
      arr[k++] = R[j++];
      setArray([...arr]);
      await delay();
    }
  };

  const mergeSortHelper = async (arr, l, r) => {
    if (l >= r) return;

    const m = l + Math.floor((r - l) / 2);
    await mergeSortHelper(arr, l, m);
    await mergeSortHelper(arr, m + 1, r);
    await merge(arr, l, m, r);
  };

  await mergeSortHelper(array, 0, array.length - 1);
}
