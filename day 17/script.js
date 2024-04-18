class Hotel {
    constructor(hotelId, hotelName, categoria, address, phone) {
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.categoria = categoria;
        this.address = address;
        this.phone = phone;
    }
}

class Reservation {
    constructor(reservId, hotelId, reservName, checkIn, checkOut) {
        this.reservId = reservId;
        this.hotelId = hotelId;
        this.reservName = reservName;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
    }
}

let hotels = [];
let reservations = [];
let hotelId 
let reservId 

function registerHotel(hotelId, hotelName, categoria, address, phone) {
    const newHotel = new Hotel(hotelId, hotelName, categoria, address, phone);

    if (hotels.includes(newHotel)) {
        alert("You can not add the same hostel")
    } else {
        hotels.push(newHotel)
    }

    do {
        hotelId = generateRandomId();
    } while (!idUnique(hotelId,hotels));

    return newHotel;
}

function registerReserv(reservId, hotelId, reservName, checkIn, checkOut) {
    const newReservation = new Reservation(reservId, hotelId, reservName, checkIn, checkOut);

    if (reservations.includes(newReservation)) {
        alert("You can not add the same hostel")
    } else {
        reservations.push(newReservation)
    }

    return newReservation;
}

function showReserv(reservId) {
    if (reservations.includes(reservId)) {
        console.log("These are your reservations: " + reservations)
    }
}

function showName(reservName) {
    if (reservations.includes(reservId)) {
        console.log("These are your reservations: " + reservations)
    }
}

function showCategoria(categoria) {
    let filterHotel = hotels.filter( hotel => {
        return hotel.categoria === categoria;
    })

    if (filterHotel > 0) {
        console.log(`Hotéis na categoria "${categoria}":`);
        filterHotel.forEach(hotel => {
            console.log(`- ${hotel.nome}`);
        })
    }else {
        console.log(`Não foram encontrados hotéis na categoria "${categoria}".`);
    }
}

function showPhone(hotelId, phone) {
    const hotel = hotels.find(h => h.id === hotelId)

    if (hotel && !hotel.phone.includes(phone)) {
        hotel.phone.push
    }
}

function generateRandomId() {
    return  Math.floor(Math.random() * 9000) + 1000;  
}

function idUnique (id, hotels){
    return !hotels.some(hotel => hotel.id === id);
}

let condition = true;

while (condition) {
    let userOp = prompt("1-resgister a new hotel | 2-register a new reservation | 3-show reservs by name | 4-show reservs by id | 5-show reservs by categoria | 6- change the phone number")

    switch (userOp) {
        case "1":
            hotelName = "Palace"
            categoria = "Luxo"
            address = "d15vy09" 
            phone = "555"

            // USER PROMPTS
            // hotelName = prompt("Insert the hotel name");
            // categoria = prompt("Insert the categoria");
            // address = prompt("Insert the address"); 
            // phone = prompt("Insert the phone");

            console.log(registerHotel(hotelId, "Palace", "Luxo", "d15vy09", "555"));
            console.log(registerHotel(hotelId, "Prime", "Fino", "d15VCV0", "123"));


            // console.log(id);

        case "2":
            console.log(hotelId)
            condition = false


        break;
    }

}

// - Crie uma função que recebe como parâmetro o nome de uma pessoa e exibe na tela todas as suas reservas;

// 6 - Crie uma função que recebe como parâmetro uma categoria e retorna um array com todos os hotéis nessa categoria;

// 7 - Crie uma função que recebe o id de um hotel e um telefone como parâmetro, a função deve atualizar o telefone de cadastro com o número recebido;

// 8 - Crie um fluxo de funcionamento para o algoritmo, o usuário deve poder escolher quando encerrar o programa.

// Regras:
// O id não pode ser igual a nenhum outro já existente;
// O dia de entrada não pode ser maior que o de saída;
// No cadastro de uma reserva o id do hotel deve ser válido, ou seja, não deve permitir o cadastro de um hotel que não esteja no sistema;




