var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
console.log("Sum:", sum);
