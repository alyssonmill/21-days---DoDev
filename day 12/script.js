let names = [];
let pass = [];
let userOp 
let userCond
let userName
let userPass

let condition = true;

while (condition) {
    userOp = prompt("1-sigh-up | 2-long-in | 3-delete | 4-End the system")

    switch (userOp) {
        case "1":
            userName = prompt("Insert a name");
            userPass = prompt("Insert a pass");

            names.push(userName);
            pass.push(userPass);

            break;
        
        case "2":

            userName = prompt("Insert a name");
            userPass = prompt("Insert a pass");

            if (userName = names && userPass == pass) {
                console.log("Well Done");
                continue;
            }else{
                console.log("Insert a valid details");
                continue;
            }
        
        case "3":
            userName = prompt("Insert a name to remove");
            userPass = prompt("Insert a pass to remove");

            let userIndex = names.indexOf(userName);
            let passIndex = pass.indexOf(userPass);

            if (userIndex !== -1 && passIndex !== -1) {
                names.splice(userIndex, 1);
                pass.splice(passIndex, 1);
                console.log("User removed successfully.");

            }else{
                console.log("Insert a valid details");
                continue;
            }
    }
}


