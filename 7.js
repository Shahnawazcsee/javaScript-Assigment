function getWeatherCondition(temperature) {
    return temperature > 30 ? "Hot" : "Moderate";
}

// Example usage
const temp1 = 35;
console.log(`Temperature: ${temp1}°C - Weather Condition: ${getWeatherCondition(temp1)}`);

const temp2 = 25;
console.log(`Temperature: ${temp2}°C - Weather Condition: ${getWeatherCondition(temp2)}`);