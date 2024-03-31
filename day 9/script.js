
// Magreza, quando o resultado é menor que 18,5 kg/m2;

//       - Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;   

//       - Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;

//       - Obesidade, quando o resultado é maior que 30 kg/m2.


let userName = "Aly";
let userAge = 21;
let userWeight = 65;
let userHeight = 1.70;
let userJob = "Web developer";
let ageWeek
let ageMonth
let ageDays
let imc

if (userAge >= 18) {
    console.log("You can drink Alcohol")
} else {
    console.log("Sorry! You can not drink!")
}

ageMonth = 12 * userAge;
ageWeek = 52 * userAge;
ageDays = 365 * userAge;

imc = userWeight / (userHeight * userHeight);
// let bmi = Number(imc.toFixed(2));
let bmi = 50;


if (bmi <= 18.5 )  {
    console.log("Skine")
}else if (bmi > 18.5 && bmi <= 22.9)  {
    console.log("Normal")
}else if (bmi <= 30)  {
    console.log("Fat")
}else {
    console.log("Very fat")
}




console.log("Name: " + userName + " Age: " + userAge + " Wheight: " + userWeight + " Heigth: " 
+ userHeight + " Job: " + userJob);

console.log("This is your age in months: " + ageMonth);

console.log("This is your age in weeks: " + ageWeek);

console.log("This is your age in days: " + ageDays);

console.log("This is your bmi: " + bmi);




