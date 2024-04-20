class Hotel {
    constructor(hotelId, hotelName, category, address, phone) {
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.category = category;
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
let hotelId = 0;
let reservId = 0;
let id;

function registerHotel(hotelId, hotelName, category, address, phone) {
    hotelId = generateRandomId();
    while (!idUnique(hotelId, hotels)) {
        hotelId = generateRandomId();
    };

    const newHotel = new Hotel(hotelId, hotelName, category, address, phone);

    if (hotels.includes(newHotel)) {
        alert("You cannot add the same hotel");
    } else {
        hotels.push(newHotel);
    }
    return newHotel;
}

function registerReserv(reservId, hotelId, reservName, checkIn, checkOut) {
    
    reservId = generateRandomId();
    while (!idUnique(reservId, reservations)) {
        hotelId = generateRandomId();
    };


    const newReservation = new Reservation(reservId, hotelId, reservName, checkIn, checkOut);
    if (reservations.some(reservation => reservation.reservId === newReservation.reservId) && hotels.some(hotel => hotel.hotelId === hotelId)) {
        alert("A reservation with the same ID already exists.");
    } else {
        reservations.push(newReservation);
    }

    return newReservation;
}

function showName(reservName) {
    const matchingReservations = reservations.filter(reservation => reservation.reservName === reservName);

    if (matchingReservations.length > 0) {
        console.log("Reservations for " + reservName + ":");
        matchingReservations.forEach(reservation => {
            console.log(`- ID: ${reservation.reservId}, Check-in: ${reservation.checkIn}, Check-out: ${reservation.checkOut}`);
        });
    } else {
        console.log("No reservations found for " + reservName);
    }
}

function showReserv(reservId) {
    const matchingReservations = reservations.filter(reservation => reservation.reservId === reservId);

    if (matchingReservations.length > 0) {
        console.log("Reservations with ID " + reservId + ":");
        matchingReservations.forEach(reservation => {
            console.log(`- Name: ${reservation.reservName}, Check-in: ${reservation.checkIn}, Check-out: ${reservation.checkOut}`);
        });
    } else {
        console.log("No reservations found with ID " + reservId);
    }

}

function showCategory(category) {
    let filterHotel = hotels.filter(hotel => {
        return hotel.category === category;
    });

    if (filterHotel.length > 0) {
        console.log(`Hotels in the category "${category}":`);
        filterHotel.forEach(hotel => {
            console.log(`- ${hotel.hotelName}`);
        });
    } else {
        console.log(`No hotels found in the category "${category}".`);
    }
}

function showPhone(hotelId, newPhone) {
    const hotel = hotels.find(hotel => hotel.hotelId === hotelId);

    if (hotel) {
        hotel.phone = newPhone;
        console.log(`Phone number for hotel ${hotelId} updated successfully.`);
    } else {
        console.log(`Hotel with ID ${hotelId} not found.`);
    }
}

function generateRandomId() {
    return Math.floor(Math.random() * 9000) + 1000;
}

function idUnique(id, hotels) {
    return !hotels.some(hotel => hotel.hotelId === id);
}

let condition = true;

while (condition) {
    let userOp = prompt("1-register a new hotel | 2-register a new reservation | 3-show reservations by name | 4-show reservations by id | 5-show reservations by category | 6- change the phone number");
    let category
    let newPhone
    switch (userOp) {
        case "1":
            let hotelName = prompt("Insert the hotel name");
            let category = prompt("Insert the category");
            let address = prompt("Insert the address");
            let phone = prompt("Insert the phone");

            // let hotelName = "Palace"
            // category = "Luxo"
            // let address = "d15vy09"
            // phone = "555"

            console.log(registerHotel(hotelId, hotelName, category, address, phone));
            break;

        case "2":
            reservName = prompt("What is your good name ?");
            let checkIn = prompt("Insert the checkIn date");
            let checkOut = prompt("Insert the checkOut date");

            console.log(registerReserv(reservId, hotelId, reservName, checkIn, checkOut));
            break;
        case "3":
            reservName = prompt("Insert the name that you want to search");
            showName(reservName);
            break;
        case "4":
            reservId = parseFloat(prompt("What is the ID from the reservation ?"));
            showReserv(reservId);
            break;
        case "5":
            category = prompt("Insert the category")
            console.log(showCategory(category));
            condition = false;
            break;
        case "6":
            hotelId = parseFloat(prompt("What is the ID from the hotel ?"))
            newPhone = parseFloat(prompt("What is the new NUMBER that you want to update ?"))
            showPhone(hotelId, newPhone);
            break;
        default:
            alert("Invalid option. Please choose a valid option.");
            condition = false;
    }
}