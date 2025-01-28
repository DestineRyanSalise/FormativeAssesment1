var nickname = prompt("Enter your nickname:");
var heightInInches = parseFloat(prompt("Enter your height in inches:"));
var weightInKg = parseFloat(prompt("Enter your weight in kilograms:"));

var heightInFeet = Math.floor(heightInInches / 12);
var heightInRemainingInches = heightInInches % 12;

var weightInPounds = weightInKg * 2.20462;

alert("Name: " + nickname + "\nHeight: " + heightInFeet + "'" + heightInRemainingInches + "\"\nWeight: " + weightInPounds.toFixed(3) + " lbs");

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var birthYear = prompt("Enter your birth year:");

var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;

document.getElementById("output").innerHTML = "Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?";

var shareInfo = confirm("Do you agree to share your personal information with our site?");

if (shareInfo) {
    console.log("Name: " + nickname + "\nHeight: " + heightInFeet + "'" + heightInRemainingInches + "\"\nWeight: " + weightInPounds.toFixed(3) + " lbs");
} else {
    console.log("User does not wish to share his/her information.");
}
