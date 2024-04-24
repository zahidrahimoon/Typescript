function reverseNumber(num: number): number {
    const reversedString = num.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
}

// Example usage
const num = 12345;
const reversedNum = reverseNumber(num);
console.log(reversedNum); // Output: 54321
