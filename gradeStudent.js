function gradeStudent(marks) {
    if (marks > 90) {
        return 'A';
    } else if (marks >= 70 && marks <= 90) {
        return 'B';
    } else if (marks >= 50 && marks < 70) {
        return 'C';
    } else {
        return 'F';
    }
}

// Test the function with example inputs
let studentsMarks = [95, 85, 60, 45, 75];
studentsMarks.forEach(marks => {
    console.log(`Marks: ${marks}, Grade: ${gradeStudent(marks)}`);
});