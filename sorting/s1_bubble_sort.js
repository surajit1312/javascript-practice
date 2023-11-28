var arr = [14, 45, -100, -66, 76, 89, 122];

function bubbleSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] >= arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

function swap(arr, a, b) {
  let temp = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
}

bubbleSort(arr);
console.log("Sorted Array (bubble sort) :", arr);
