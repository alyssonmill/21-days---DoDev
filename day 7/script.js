// Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se 
// ele deseja cadastrar outra nota. No final, exiba no console:


//  - A média geral dos alunos
//  - Quantos homens enviaram as notas
//  - Quantas mulheres tiveram nota acima de 7
//  - Qual a maior nota entre os homens
    

//     *Obs.: para obter a média geral deve somar todas as notas e 

//     dividir pelo número de alunos!


let a = true;
let students = 0;
let n = 0;
let score 
let gender
let signUp
let avg
let men = 0;
let w7 = 0;
let highM = 0;

while (a) {
    score = parseInt(prompt("Insert a valid score"));
    gender = prompt("Insert your gender");
    signUp = prompt("Signup again ?");
    
    students++
    n += score;

    avg = n / students;

    switch (gender) {
        case "m":
        men++  
        
        if (score > highM) {
            highM = score;
        }

        break;

        case "w":
            if(score >= 7){
                w7++
            }
            break;
    
        default:
            break;
    }

    if(signUp === "n"){
        a = false
    }

}

console.log("Quantity of students: " + students);
console.log("Avarege score: " + avg);
console.log("Quantity of men: " + men);
console.log("Quantity of women more than seven: " + w7)
console.log("This is the highest score betwen men: " + highM)




