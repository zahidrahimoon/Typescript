// 2. Write a TypeScript function that takes an array of numbers as input and returns the sum of all the numbers.
var numbers = [1, 2, 3, 4, 5];
function sumFunc(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumFunc(numbers));
