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


