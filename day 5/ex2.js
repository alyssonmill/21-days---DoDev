let userOp = prompt("What do u want fill up ?");
let userQtd = parseInt(prompt("How much do u want?"))
let gasoline = 5;
let alcohol = 3;
let result

switch (userOp) {
    case "gasoline":
        result = userQtd / gasoline;
        console.log(" You filled : " + result + "L");
        break;
    case "alcohol":
        result = userQtd / alcohol;
        console.log(" You filled : " + result + "L");
        break;
    case "tire":
        console.log("You filled already");
    default:
        break;
}

