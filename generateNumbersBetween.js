function generateNumbersBetween(num1, num2) {
    let numbers = [];
    for (let i = num1 + 1; i <= num2; i++) {
        numbers.push(i);
    }
    return numbers;
}

// Example usage
const num1 = 10;
const num2 = 25;
console.log(`Numbers between ${num1} and ${num2}: ${generateNumbersBetween(num1, num2).join(", ")}`);