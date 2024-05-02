function isPalindrome(str: string): boolean {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello")); 
