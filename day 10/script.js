////////////////////1////////////////////

// let condition = true;
// let numbers = [];
// let userInsert 
// let position = 0;
// let ahead

// while (condition) {
//     userInsert = prompt("Insert a number");
//     numbers[position] = userInsert;

//     ahead = prompt("Insert 1 to ahead");
//     if (ahead != "1") {
//         condition = false;
//     }

//     position++
// }

////////////////////2////////////////////

// let numbers = [0,1,2,3,4,5,6,7,8,9];

// for(let i = numbers[9];i >= numbers[0]; i--){
//     console.log(i)
// }

// for(let i = numbers[0];i <= numbers[9]; i++){
//     console.log(i)
// }

////////////////////3////////////////////

// 3 - Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. Depois, o usuário vai 
// preenchendo elemento por elemento do vetor, ao final, exiba o array e o array ao contrário

// let userInsert = prompt()

let userInsert
let userLimit = parseInt(prompt("How many numbers? "));
let position = 0;
let numbers = [];

numbers.length = userLimit;

while(position < userLimit){
    userInsert = prompt("Insert a number");
    numbers[position] = userInsert;

    position++
}

for(let i = numbers[userLimit - 1]; i >= numbers[0]; i--){
    console.log(i)
}

console.log("------------------");

for(let i = numbers[0];i <= numbers[userLimit - 1]; i++){
    console.log(i)
}





///////////////////4////////////////////




