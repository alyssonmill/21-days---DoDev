// Solicite o nome e o cpf do seu cliente.
// Pergunte um valor.
// Ofereça a opção de saque ou depósito.
// Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
// Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
// Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
// Exiba o saldo total.
// Exiba o maior valor inserido(independente de ser depósito ou saque).
// Exiba a média dos valores inseridos(independente de ser depósito ou saque).


// REGRAS: 
//     1- Considere iniciar a variável saldo com algum valor

//     1- Não deve ser permitido sacar um valor não disponível no saldo.

//     2- Não deve ser permitido sacar nem depositar um valor negativo.



let condition = true;
let userName
let userId
let userAccount = 100;
let userValue
let userOp
let result = 0;
let a 

while (condition) {
    userName = "Alysson";
    userId = 123;
    userValue = parseInt(prompt("How much ?"));
    userOp = prompt ("Would you like to add or withdraw money ? ( 1 or 2 )")
    a = prompt ("Would you like another operation ? (1 - YES 2 - NO)")


    if (userValue > userAccount || userAccount < 0){
        alert("You can not proceed in this operation")
    }

    


    switch (userOp) {
        case "1":
            
                result = userAccount + userValue;
            
            break;
        case "2":
            
            result = userAccount - userValue;
            break;
        default:
            
            break;
    }

    if (a === "2") {
        condition = false;
    }else{
        condition = true;
    }


}

console.log(result)


