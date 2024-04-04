let studentNames = [];
let studentScores = []

let students = 0;
let condition = true; 
let userNames
let userScores
let cond
let n = 0;
let avg

while(condition){
    userNames = prompt("Insert the name");
    userScores = parseInt(prompt("Insert the score"));
    cond = prompt ("Would you like to add another student ? (If so, press 1)");

    studentNames[students] = userNames;
    studentScores[students] = userScores;

    if (cond != "1") {
        break;
    }

    students++

}

for(let i = 0; i < studentScores.length; i++){
    n += parseFloat(studentScores[i]);
    avg = n / studentNames.length; 
}

for(let i = 0; i < studentNames.length && studentScores.length ; i++){
    console.log(studentNames[i] + " - " + studentScores[i])
}

console.log("Avarege score: " + avg);