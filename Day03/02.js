function reverseNumber(num) {
    var reversedString = num.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
}
// Example usage
var num = 12345;
var reversedNum = reverseNumber(num);
console.log(reversedNum); // Output: 54321
