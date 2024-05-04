var numbers = [1, 2, 3, 4, 5];
var isSorted = numbers.every(function (value, index, array) { return !index || value >= array[index - 1]; });
console.log("Is Sorted:", isSorted);
