function isPrime(num) {
    if (num <= 1)
        return false;
    if (num === 2)
        return true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));
