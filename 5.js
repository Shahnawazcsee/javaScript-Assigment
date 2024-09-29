function login(username, password) {
    return (username === "admin" && password === "12345") ? "Login successful" : "Invalid credentials";
}

// Example usage
const username = "admin";
const password = "12345";
console.log(login(username, password));  // Output: Login successful

const wrongUsername = "user";
const wrongPassword = "54321";
console.log(login(wrongUsername, wrongPassword));  // Output: Invalid credentials