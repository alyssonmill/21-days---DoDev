// 1 - Crie um array para receber os nomes dos alunos e outro para receber as notas;

// 2 - Para cada aluno inserido pergunte o nome e a nota da prova;

// 3 - Seu usuário deve ter a opção de parar de inserir informações quando desejar;

// 4 - No final exiba a nota de cada aluno, a soma das notas e a média geral da turma. 
// Para calcular a média deve dividir a soma das notas pelo total de alunos.

let studentNames = ["Aly", "Eva", "Erick", "Enzo", "Erick"];
let studentScores = ["5", "5", "5", "5", "5"]

let students = 0;
let condition = true; 
let userNames
let userScores
let cond
let n = 0;
let avg

while(condition){
    // userNames = prompt("Insert the name");
    // userScores = parseInt(prompt("Insert the score"));
    cond = prompt ("Would you like to add another student ? (If so, press 1)");

    // studentNames[students] = userNames;
    // studentScores[students] = userScores;

    if (cond != "1") {
        break;
    }

    students++

}

// for(let i = 0; i < studentScores.length; i++){
//     n += parseFloat(studentScores[i]);
//     avg = n / studentNames.length; 
// }

for(let i = 0; i <= studentNames.length && studentScores.length ; i++){
    console.log(studentNames[i] + " - " + studentScores[i])
}

// console.log("Avarege score: " + avg);