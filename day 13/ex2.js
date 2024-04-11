let distance = 1000;
let cName
let power
let maxSpeed
let acceleration
let result

class Car {
    cName
    power
    maxSpeed
    acceleration

    constructor(cName, power, maxSpeed, acceleration){
        this.cName = cName;
        this.power = power;
        this.maxSpeed = maxSpeed;
        this.acceleration = acceleration;
    }

    calc(distance) {
        const result = distance / (this.maxSpeed / this.acceleration)    
        return `Car: ${this.cName}, Power: ${this.power}, Max Speed: ${this.maxSpeed}, Acceleration: ${this.acceleration}, Time taken to cover ${distance} meters: ${result} seconds`;;  
    }
}

class Race {
    rName
    type
    distance
    participants
    winner
    calc

    constructor(rName, type, distance, participants, winner, calc){
        this.rName = rName;
        this.type = type;
        this.distance = distance;
        this.participants = participants;
        this.winner = winner;
        this.calc = calc;
    }

}

cName = "Ferrari";
power = "200";
maxSpeed = "300";
acceleration = "4";

let car1 = new Car ("Ferrari", "200", "300", "4");

let car2 = new Car ("Mercedez", "225", "275", "3");

console.log(car1.calc(distance));
console.log(car2.calc(distance));




