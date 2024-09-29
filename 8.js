function sumOfNumbers(n) {
    let sum = 0;
    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    return sum;
}

// Example usage
const number = 5;
console.log(`Sum of numbers from 1 to ${number}: ${sumOfNumbers(number)}`);