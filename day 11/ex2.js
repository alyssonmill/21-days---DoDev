let carModels = [];
let carYear = [];
let carPrice = [];

let userModel
let userYear
let userPrice
let cond

let position = 0;

let condition = true;

while (condition) {
    userModel = prompt("Insert the model");
    userYear = prompt("Insert the year");
    userPrice = prompt("Insert the price");

    cond = prompt("Insert 1 to add another one")

    carModels[position] = userModel;
    carYear[position] = userYear;
    carPrice[position] = userPrice;

    carPrice.sort((a, b) => a - b);


    if (cond != "1") {
        break;
    }

    position++
}

for(let i = 0; i < carModels.length ; i++){
    console.log("Model: " + carModels[i])
    console.log("Year: " + carYear[i])
    console.log("Price: " + carPrice[i])
    console.log("-----------------------")

}



