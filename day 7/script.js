// Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se 
// ele deseja cadastrar outra nota. No final, exiba no console:


//  - A média geral dos alunos
//  - Quantos homens enviaram as notas
//  - Quantas mulheres tiveram nota acima de 7
//  - Qual a maior nota entre os homens
    

//     *Obs.: para obter a média geral deve somar todas as notas e 

//     dividir pelo número de alunos!


let s = true;
let score 
let gender
let signup
let notas

while (s) {
    score = prompt("Insert the score");
    gender = prompt("Insert the gender");
    signup = prompt("Signup again ?");

    score++
    notas = score;

    console.log(notas);





    if(signup === "n"){
        s = false;
    }
}

