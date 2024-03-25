let userN1 = prompt("Type the first number");
let userN2 = prompt("Type the second number");
let userOp = prompt ("Which operation ? + - * /")
let result 

switch (userOp) {
    case "+":
        result = userN1 + userN2;
        alert(userN1 + " + " + userN2 + " = " + result) 
        break;
    case "-":
        result = userN1 - userN2;
        alert(userN1 + " - " + userN2 + " = " + result) 
        break;
    case "*":
        result = userN1 * userN2;
        alert(userN1 + " * " + userN2 + " = " + result) 
        break;
    case "/":
        result = userN1 / userN2;
        alert(userN1 + " / " + userN2 + " = " + result) 
        break;    
    default:
        break;
}