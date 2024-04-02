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
let position = 0;
let numbers = [];
numbers.length = parseInt(prompt("How many numbers? "));

while(numbers.length){
    userInsert = prompt("Insert a number");
    numbers[position] = userInsert;

    if (numbers.length == numbers) {
        break;
    }

    position++
}




///////////////////4////////////////////





