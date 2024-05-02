function fibonacci(count: number): number[] {
    const sequence = [0, 1];
    for (let i = 2; i < count; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

console.log(fibonacci(5));
