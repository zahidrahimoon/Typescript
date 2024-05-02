function fibonacci(count) {
    var sequence = [0, 1];
    for (var i = 2; i < count; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log(fibonacci(5));
