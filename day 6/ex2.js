let userNum = parseInt(prompt("Insert a number"));
let result

for(let a = userNum; a <= (userNum + 2); a++){

    console.log("------" + a + "------")

    for(let i = 0; i <= 10; i++){
            result = a * i;
            console.log(a + " X " + i + " = " + result)
            
        }


}
    