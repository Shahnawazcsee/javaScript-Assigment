function checkNumber(num) {
    return num > 0 ? "positive" : (num < 0 ? "negative" : "zero");
}

// Example usage
const numbers = [10, -5, 0];
numbers.forEach(num => {
    console.log(`Number: ${num} is ${checkNumber(num)}`);
});