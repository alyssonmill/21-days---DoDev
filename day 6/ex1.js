let userNumber = parseInt(prompt("Insert a positive number"));

for(let i = 0; i <= userNumber; i += 5 ){
    console.log(i)
}

console.log("-----------------------")

for(let i = userNumber; i >= 0; i -= 5 ){
    console.log(i)
}