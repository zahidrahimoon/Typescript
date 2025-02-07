var counter = 0;
var counterDisplay = document.getElementById("counter");
var incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");
var resetButton = document.getElementById("reset");
function updateCounterDisplay() {
    counterDisplay.textContent = counter.toString();
}
incrementButton.addEventListener("click", function () {
    counter++;
    updateCounterDisplay();
});
decrementButton.addEventListener("click", function () {
    counter--;
    updateCounterDisplay();
});
resetButton.addEventListener("click", function () {
    counter = 0;
    updateCounterDisplay();
});
updateCounterDisplay();
