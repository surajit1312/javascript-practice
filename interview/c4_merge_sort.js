var arr = [9, 4, 7, 6, 3, 1, 5];

function mergeSort(arr, low, high) {
  if (low < high) {
    var mid = Math.floor(low + (high - low) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    mergeSortedArrays(arr, low, mid, high);
  }
}

function mergeSortedArrays(arr, low, mid, high) {
  var i = low;
  var j = mid + 1;
  var result = new Array(arr.length);
  var k = low;

  while (i <= mid && j <= high) {
    if (arr[i] >= arr[j]) {
      result[k] = arr[j];
      j++;
    } else {
      result[k] = arr[i];
      i++;
    }
    k++;
  }
  if (j > high) {
    while (i <= mid) {
      result[k] = arr[i];
      i++;
      k++;
    }
  }
  if (i > mid) {
    while (j <= high) {
      result[k] = arr[j];
      j++;
      k++;
    }
  }
  for (var k = low; k <= high; k++) {
    arr[k] = result[k];
  }
}

mergeSort(arr, 0, arr.length - 1);

console.log("Sorted array (merge sort) :", arr);
