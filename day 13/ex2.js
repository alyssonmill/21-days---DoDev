// - Crie uma classe Carro com as seguintes propriedades:


// Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
// Potencia - número de cavalos de potência do carro;
// VelocidadeMaxima - qual a maior velocidade que o carro pode alcançar;
// Aceleracao - o tempo em segundos que o carro leva para ir de 0 a 100 km/h


// 2 - Adicione na classe carro um método que recebe como parâmetro uma 
// distância em metros e calcula o tempo em segundos para percorrer essa 
// distância. Use a seguinte fórmula para o cálculo: 


//  resultado = distância / (VelocidadeMaxima / Aceleracao). 



//    A função deve retornar esse resultado;4

let distancia = 1000;
let result 
let cName
let power
let maxSpeed
let acceleration
let calc

class Car {
    cName
    power
    maxSpeed
    acceleration
    calc

    constructor(cName, power, maxSpeed, acceleration){
        this.cName = cName;
        this.power = power;
        this.maxSpeed = maxSpeed;
        this.acceleration = acceleration;
    }
}

function calc (distancia, maxSpeed, acceleration){
    result = distancia / (maxSpeed / acceleration)

    return result;
}



cName = "Ferrari";
power = "200";
maxSpeed = "300";
acceleration = "4";

let n = new Car (cName, power, maxSpeed, acceleration, calc());
console.log(n)


