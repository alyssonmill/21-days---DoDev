function info() {
    let userName = prompt("Insert a name");
    let userSalary = parseFloat(prompt("Insert ur salary:"));
    let increasing 
    let percent

    function increase(){

        if (userSalary <= 1500) {
            percent = 20/100
            increasing = percent * userSalary;
            console.log(userName +",This is your new salary: "+ "$" +(increasing + userSalary))
        }else if (userSalary >= 1501 && userSalary <= 2000){
            percent = 15/100
            increasing = percent * userSalary;
            console.log(userName +",This is your new salary: "+ "$" +(increasing + userSalary))
        }else if (userSalary >= 2001 && userSalary <= 3000){
            percent = 10/100
            increasing = percent * userSalary;
            console.log(userName +",This is your new salary: "+ "$" +(increasing + userSalary))
        } else if (userSalary > 3001){
            percent = 5/100
            increasing = percent * userSalary;
            console.log(userName +",This is your new salary: "+ "$" +(increasing + userSalary))
        }

        function again (){
            let again = prompt("Insert 1 to reapeat the process")
            if (again === "1") {
                info();
            }else {
                alert ("Thanks !!")
                return;
            }
        }

        again ()
    }
    
    increase()
}

// epois de calcular o aumento você deve exibir: o nome do colaborador, o salário, a % de aumento e o salário reajustado.


// 4 - Crie uma função que  deve ser chamada no final da função que calcula o reajuste salarial, essa função deve perguntar se o usuário deseja calcular novamente com 
// novas informações.


// 5 - Para testar basta chamar a primeira função criada, e as outras serão chamadas na sequência conforme a execução do código


//  * Para calcular o aumento, faça o valor do salário multiplicado

//    pela porcentagem em decimal. 

//      Ex.: salário R$1.000,00 aumento de 10%   |   salário R$1.000,00 aumento de 15%

//           1000 * 1.10 = 1100                  |   1000 * 1.15 =   1150

info();


