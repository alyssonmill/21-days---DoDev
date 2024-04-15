let names = [];
let pass = [];
let position = 0;
let userName
let userPass
let condition = true;

function info (){
    let op = prompt("1-register 2-login 3-delete 4-quit  ");
    return op;
}

function register(){
    userName = prompt("Insert a name");
    userPass = prompt("Insert a pass");

    let op2 = prompt("Insert 1 to come back to the menu");

    names.push(userName);
    pass.push(userPass);

    if (op2 === "1") {
        info();
    }
}

function login (userName, userPass){

    if (names.includes(userName) && pass.includes(userPass)) {
        alert("Welcome")
    }else {
        alert("Insert a valid info")
    }
}

function delet (){
    userName = prompt("Insert a name")
    let i = names.indexOf(userName)

    if(userName !== -1){
        names.splice(i, 1) 
        pass.splice(i, 1)
        alert("You have deleted")
        info();
    }else {
        alert("I could not find this name")
    }
}

while (condition) {
    let option = info();

    switch (option) {
        case "1":
            register();
            break;
        case "2":
            userName = prompt("Insert a name");
            userPass = prompt("Insert a pass");
            login(userName, userPass);
            break;
        case "3":
            delet();            
            break;
        case "4" :
            condition = false;
        default:
            break;
    }
}


