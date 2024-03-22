let userName = "Aly";
let userAge = 21;
let userHeight = 1.75;
let userWeight = 60;

let userYear = 2024 - userAge;
let userBmi = userWeight / (userHeight * userHeight);
let bmi = userBmi.toFixed(2);

console.log("This is your bmi : " + bmi);
console.log("I was born in : " + userYear);

console.log(
    "Hello " + userName + " you are " + userAge + " years old ,born in " + userYear + 
    " you are " + userHeight + " tall ,weigh " + userWeight + "kg ,your BMI is " + bmi + "kg/m2");





