// 2 - Crie funções para cadastrar um hotel e uma reserva;

// 3 - Crie uma função que recebe como parâmetro o id do hotel e exibe na tela todas as
//  reservas neste hotel com as seguintes informações: nome do hotel - nome do responsável da reserva - dia de entrada - dia de saída

// 4 - Crie uma função que recebe como parâmetro o id de uma reserva e exibe no console: nome do hotel - endereço - 
// dia de entrada - dia de saída

class Hotel {
    constructor(hotelId, hotelName, categoria, address, phone){
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.categoria = categoria;
        this.address = address;
        this.phone = phone;
    }
}

class Reservation {
    constructor(reservId, hotelId, reservName, checkIn, checkOut){
        this.reservId = reservId;
        this.hotelId = hotelId;
        this.reservName = reservName;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
    }
}



let hotels = [];
let reservations = ["123"];
let hotelId = 0;
let reservId = 0;

function registerHotel (hotelId, hotelName, categoria, address, phone) {
    const newHotel = new Hotel (hotelId, hotelName, categoria, address, phone);

    if (hotels.includes(newHotel)) {
        alert("You can not add the same hostel")
    }else {
        hotels.push(newHotel)
    }

    return newHotel;
}

function registerReserv (reservId, hotelId, reservName, checkIn, checkOut) {
    const newReservation = new Reservation (reservId, hotelId, reservName, checkIn, checkOut);

    if (reservations.includes(newReservation)) {
        alert("You can not add the same hostel")
    }else {
        reservations.push(newReservation)
    }

    return newReservation;
}

function showReserv(reservId) {

    if (reservations.includes(reservId)) {
        console.log("These are your reservations: " + reservations)
    }
}

let s = showReserv("123")


