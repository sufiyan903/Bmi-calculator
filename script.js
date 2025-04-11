function calculateBMI() {
    // Get the input values
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters

    // Calculate BMI
    if (name && age > 0 && weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        const result = document.getElementById('result');
        result.textContent = `${name}, aged ${age}, your BMI is ${bmi.toFixed(2)}`;
    } else {
        alert("Please enter valid name, age, weight, and height");
    }
}
