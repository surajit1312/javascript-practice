var arr = [14, 45, -100, -66, 76, 89, 122];

function quickSort(arr, low, high) {
  if (low < high) {
    let pivot = getPivot(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
}

function getPivot(arr, low, high) {
  let i = low,
    j = high;
  let mid = Math.floor(low + (high - low) / 2);
  let pivot = arr[mid];
  while (i < j) {
    while (arr[i] <= pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, j, low);
  return j;
}

function swap(arr, a, b) {
  let temp = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
}

quickSort(arr, 0, arr.length - 1);

console.log("Sorted array (quick sort) :", arr);
