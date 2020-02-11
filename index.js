// Insertion sort algorithm
// Assume array divided into two part
// 1st element is sorted
// from 2nd element is unsorted
// take 2nd element in temp variable and compare it to sorted array from right to left  upto index zero
// place element into its right position and then shift the right accordingly
// Done!!!

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    for(let j = i - 1; j >= 0; j++) {
      // will do this tommarow first half.
    }
  }
}

let arr = [1,5,6,7,3,4];

insertionSort(arr);

console.log(arr);

