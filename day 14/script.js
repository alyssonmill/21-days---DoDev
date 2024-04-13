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

info();


