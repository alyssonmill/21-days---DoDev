let names = [];
let pass = [];
let position = 0;
let userName
let userPass

function info (){
    let op = prompt("1-register 2-login 3-delete 4-quit  ");

    switch (op) {
        case "1":
            // userName = prompt("Insert a name")
            // userPass = prompt("Insert a pass")
            register(userName, userPass);
            break;
        case "2":
            // userName = prompt("Insert a name")
            // userPass = prompt("Insert a pass")
            login(userName, userPass);            
            break;
        case "3":
            // userName = prompt("Insert a name")
            // userPass = prompt("Insert a pass")
            delet(userName);            
            break;
        default:
            break;
    }

    return op;
}

function register (){
    userName = "Renato";
    userPass = "123";
    let op2 = prompt("Insert 1 to come back to the menu");

    names[position] = userName;
    pass[position] = userPass;

    if (op2 === "1") {
        info();
    }
    position++
}

function login (userName, userPass){
    userName = "Renato";
    userPass = "123";
    if (names.includes(userName) === true && pass.includes(userPass) === true) {
        console.log("Welcome")
    }else {
        console.log("Insert a valid info")
    }
}

function delet (userName){
    userName = "Renato";
    let i = names.indexOf(userName)

    if(userName !== -1){
        names.splice(i) 
        pass.splice(i)
        console.log("You have deleted")
    }else {
        console.log("I could not find this name")
    }
}




info();


