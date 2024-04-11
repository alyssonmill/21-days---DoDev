// Depois crie uma função que deve ser chamada dentro da função que solicita as 
// informações, essa função irá calcular o aumento de salário conforme a seguinte 
// tabela:
//  ATÉ R$1.500,00 : aumento de 20%

// R$1.501,00 até R$2.000,00 : aumento de 15%

// R$2.001,00 até R$3.000,00 : aumento de 10%

// R$3.001,00 em diante : aumento de 5%


function info() {
    let userName = prompt("Insert a name");
    let userSalary = parseFloat(prompt("Insert ur salary:"));
    let increasing 
    let percent

    function increase(){
        if (userSalary < 1500) {
            percent = 20/100
            increasing = percent * userSalary;
            console.log(userName +",This is your new salary: "+ "$" +(increasing + userSalary))
        }
    }
    
    increase()
}

info();


