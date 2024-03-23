let userHunger = prompt("Are you starving ?");
let userMoney = prompt("Do you have money ?");
let userRest = prompt("is there any restaurant opened ?");

if (userHunger === "no" && userMoney === "no" && userRest === "no"){
    console.log("The dinner is at home today !");
}

if (userHunger === "yes" && userMoney === "yes" && userRest === "no") {
    console.log("You should order a delivery !");
}

if (userHunger === "yes" && userMoney === "yes" && userRest === "yes") {
    console.log("Today`s dinner will be in your favorite restaurant !");
}




