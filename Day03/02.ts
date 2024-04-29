function reverseNumber(num: number): number {
    const reversedString = num.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
}

const num = 12345;
const reversedNum = reverseNumber(num);
console.log(reversedNum); 
