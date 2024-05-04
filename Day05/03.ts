let numbers: number[] = [1, 2, 3, 4, 5];
let isSorted: boolean = numbers.every((value, index, array) => !index || value >= array[index - 1]);
console.log("Is Sorted:", isSorted);
