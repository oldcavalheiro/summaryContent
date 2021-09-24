let array = [1, 2, 3];

// mutative - change the original array
array.push('target1');
array.splice(array.length, 0, 'target2');
array[array.length] = 'target3';
console.log(array);

// non mutative - create new array but original array remains unchanged
array = [1, 2, 3];
let newArray = [];
array2 = [4, 5];

// with concat
newArray = array.concat('string');
console.log(`\n newArray with concat:`);
console.log(newArray);

newArray = array.concat(array2);
console.log(`\n newArray with concat 2x array:`);
console.log(newArray);

// with spread
newArray = [...array, 'string2'];
console.log(`\n newArray with spread:`);
console.log(newArray);

newArray = [...array, ...array2];
console.log(`\n newArray with spread 2x array:`);
console.log(newArray);
