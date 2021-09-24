let value = 3
let arr = [1, 2, 3, 4, 5, 3]
arr = arr.filter(item => item !== value)
console.log(arr)
// [ 1, 2, 4, 5 ]

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}
// Usage
console.log(removeItemOnce([2, 5, 9, 1, 5, 8, 5], 5))
console.log(removeItemAll([2, 5, 9, 1, 5, 8, 5], 5))
