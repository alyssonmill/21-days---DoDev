let distance = 1000;

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

    calc() {
        return distance / (this.maxSpeed / this.acceleration); 
    }
}

class Race {
    rName
    type
    distance
    participants
    winner

    constructor(rName, type, distance ,participants, winner){
        this.rName = rName;
        this.type = type;
        this.distance = distance;
        this.participants = [];
        this.winner = "";
    }

    fastestCar(){
        let fastestTime = this.participants[0].calc();
        let win = this.participants[0];

        for (let i = 1; i < this.participants.length; i++){
            const time = this.participants[i].calc();
            if (time < fastestTime) {
                fastestTime = time;
                win = this.participants[i];
                
            }
        }
        return this.winner = win;
    }

    showWinner (){
        alert("This is the winner: " + this.winner.cName)
    }

}
let race = new Race("Grand Prix", "Street", 2000);

race.participants[0] = new Car("Ferrari", 200, 300, 4);
race.participants[1] = new Car("Tesla", 250, 280, 5);
race.participants[2] = new Car("Ford", 180, 260, 6);

race.fastestCar();
race.showWinner();

// let fastestCar = race.fastestCar()

// console.log(car1.calc())

// if (fastestCar) {
//     console.log(`The fastest car in the race is ${fastestCar.cName} with a time of ${fastestCar.calc(race.distance)} seconds.`);
// } else {
//     console.log("No cars participated in the race.");
// }

// console.log(car1.calc(distance));
// console.log(car2.calc(distance));

// console.log(Race.participants);











