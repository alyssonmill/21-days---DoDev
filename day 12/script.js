// 1 - Crie 2 arrays: um para nomes e um para senhas

// 2- Solicite ao seu usuário o que ele deseja fazer: cadastrar, 
// fazer login, excluir um cadastro ou encerrar o programa.

// 3 - Faça o fluxo de funcionamento do código, considere que o 
// usuário pode escolher quando encerrar o programa conforme as opções.

// 4 - Se a opção escolhida for cadastro, solicite dois valores 
// ao usuário, um nome e uma senha e guarde cada um no seu respectivo array.


let names = [];
let pass = [];
let userOp 
let userCond
let userName
let userPass

let condition = true;

while (condition) {
    userOp = prompt("Insert 1 - sigh-up 2 - long-in 3 - delete 4 - End the system")

    switch (userOp) {
        case "1":
            userName = "Claudio"
            userPass = "123"

            names = userName;
            pass = userPass;

            

            console.log("Working Well")
            break;
    
        default:
            break;
    }

    userCond = prompt("Insert 1 to sign up another one")
    if (userOp != "4" ) {
        break;
    }
}


