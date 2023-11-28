var arr = [14, 45, -100, -66, 76, 89, 122];

function mergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    mergeSortedArrays(arr, low, mid, high);
  }
}

function mergeSortedArrays(arr, low, mid, high) {
  let i = low,
    j = mid + 1,
    k = low;
  let result = new Array(arr.length);

  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      result[k] = arr[i];
      i++;
    } else if (arr[i] > arr[j]) {
      result[k] = arr[j];
      j++;
    }
    k++;
  }

  while (i <= mid) {
    result[k++] = arr[i++];
  }

  while (j <= high) {
    result[k++] = arr[j++];
  }

  for (let k = low; k <= high; k++) {
    arr[k] = result[k];
  }
}

mergeSort(arr, 0, arr.length - 1);
console.log("Sorted array (merge sort) :", arr);
