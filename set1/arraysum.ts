// 2. Write a TypeScript function that takes an array of numbers as input and returns the sum of all the numbers.

let numbers = [1,2,3,4,5];
function sumFunc(numbers: number[]): number {
    let sum: number = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumFunc(numbers));
