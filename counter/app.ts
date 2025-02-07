let counter: number = 0;
const counterDisplay = document.getElementById("counter") as HTMLParagraphElement;
const incrementButton = document.getElementById("increment") as HTMLButtonElement;
const decrementButton = document.getElementById("decrement") as HTMLButtonElement;
const resetButton = document.getElementById("reset") as HTMLButtonElement;

function updateCounterDisplay(): void {
    counterDisplay.textContent = counter.toString();
}

incrementButton.addEventListener("click", () => {
    counter++;
    updateCounterDisplay();
});

decrementButton.addEventListener("click", () => {
    counter--;
    updateCounterDisplay();
});

resetButton.addEventListener("click", () => {
    counter = 0;
    updateCounterDisplay();
});

updateCounterDisplay();
