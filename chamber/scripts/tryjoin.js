/*const pricingData = "scoots.json";

async function scootsPricingData(pricingData) {
    let response = await fetch(pricingData);
    if (response.ok) {
        const data = await response.json();
        scootsProcessData(data);
        scootsProcessData1(data);
    }
}/*
function scootsProcessData1(data) {
    let rentalType1 = "";
    data.Pricing.WalkIn.forEach(dataElement1 => {
        let RentalTyped1 = dataElement1.RentalType;
        let tableBody = document.querySelector("#table-body");
        let tableRow = document.createElement("tr");
        let tableData5 = document.createElement("td");
        let tableData6 = document.createElement("td");
        tableRow.appendChild(tableData5);
        tableRow.appendChild(tableData6);
        tableBody.appendChild(tableRow);

        if (RentalTyped1 !== rentalType1) {
            tableData5.textContent = dataElement1.RentalType;
            tableData6.textContent = dataElement1.MaxPersons;
            tableData7.textContent = dataElement1.HalfDay;
            tableData8.textContent = dataElement1.FullDay;

            rentalType1 = RentalTyped1;
        }
    })
}*//*
function scootsProcessData(data) {
    let rentalType = "";
    data.Pricing.Reservation.forEach(dataElement => {
        let RentalTyped = dataElement.RentalType;
        let tableBody = document.querySelector("#table-body");
        let tableRow = document.createElement("tr");
        let tableData1 = document.createElement("td");
        let tableData2 = document.createElement("td");
        let tableData3 = document.createElement("td");
        let tableData4 = document.createElement("td");
        let tableData5 = document.createElement("td");
        let tableData6 = document.createElement("td");
        tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);
        tableRow.appendChild(tableData3);
        tableRow.appendChild(tableData4);
        tableRow.appendChild(tableData5);
        tableRow.appendChild(tableData6);
        tableBody.appendChild(tableRow);

        if (RentalTyped !== rentalType) {
            tableData1.textContent = dataElement.RentalType;
            tableData2.textContent = dataElement.MaxPersons;
            tableData3.textContent = dataElement.HalfDay;
            tableData4.textContent = dataElement.FullDay;

            rentalType = RentalTyped;
        }



    });

}

scootsPricingData(pricingData);


function scootsProcessData(data) {
    let rentalType = "";
    data.Pricing.Reservation.forEach(dataElement => {
        let rentalType1 = dataElement.RentalType;
        /*let rentalType1 = dataElement.WalkIn.RentalType;
        let tableBody = document.querySelector("#table-body");
        let tableRow = document.createElement("tr");
        let tableData1 = document.createElement("td");
        let tableData2 = document.createElement("td");
        let tableData3 = document.createElement("td");
        let tableData4 = document.createElement("td");
        let tableData5 = document.createElement("td");
        let tableData6 = document.createElement("td");
        tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);
        tableRow.appendChild(tableData3);
        tableRow.appendChild(tableData4);
        tableRow.appendChild(tableData5);
        tableRow.appendChild(tableData6);
        tableBody.appendChild(tableRow);

        if (rentalType !== rentalType1) {
            tableData1.textContent = dataElement.RentalType;
            tableData2.textContent = dataElement.MaxPersons;
            tableData3.textContent = dataElement.HalfDay;
            tableData4.textContent = dataElement.FullDay;
            tableData5.textContent = dataElement.WalkIn.HalfDay;
            tableData6.textContent = dataElement.WalkIn.FullDay;

            rentalType = rentalType1;
        }


    });

}

/*
function scootsProcessData1(data) {
    let rentalType1 = "";
    data.Pricing.WalkIn.forEach(dataElement1 => {
        let RentalTyped1 = dataElement1.RentalType;
        let tabledata5 = document.querySelector(".table-data5");
        let tabledata6 = document.querySelector(".table-data6");

        if (RentalTyped1 !== rentalType1) {
            tabledata5.textContent = dataElement1.HalfDay;
            tabledata6.textContent = dataElement1.FullDay;

            rentalType1 = RentalTyped1;
        }



    });

}

scootsPricingData(pricingData);*/


const pricingData = "scoots.json";

async function scootsPricingData(pricingData) {
    let response = await fetch(pricingData);
    if (response.ok) {
        const data = await response.json();
        scootsProcessData(data);
    }
}

function scootsProcessData(data) {
    let tableBody = document.querySelector("#table-body");

    data.Pricing.Reservation.forEach(reservationElement => {
        let rentalType = reservationElement.RentalType;

        let walkInData = data.Pricing.WalkIn.find(walkInElement => walkInElement.RentalType === rentalType);

        if (walkInData) {
            let tableRow = document.createElement("tr");

            let rentalTypeCell = document.createElement("td");
            rentalTypeCell.textContent = rentalType;
            rentalTypeCell.classList.add("rental-type");
            tableRow.appendChild(rentalTypeCell);

            let maxPersonsCell = document.createElement("td");
            maxPersonsCell.textContent = reservationElement.MaxPersons;
            maxPersonsCell.classList.add("max-persons");
            tableRow.appendChild(maxPersonsCell);

            let reservationHalfDayCell = document.createElement("td");
            reservationHalfDayCell.textContent = reservationElement.HalfDay;
            reservationHalfDayCell.classList.add("halfDay-reservation");
            tableRow.appendChild(reservationHalfDayCell);

            let reservationFullDayCell = document.createElement("td");
            reservationFullDayCell.textContent = reservationElement.FullDay;
            reservationFullDayCell.classList.add("halfDay-reservation");
            tableRow.appendChild(reservationFullDayCell);

            let walkInHalfDayCell = document.createElement("td");
            walkInHalfDayCell.textContent = walkInData.HalfDay;
            walkInHalfDayCell.classList.add("halfDay-walkIn");
            tableRow.appendChild(walkInHalfDayCell);

            let walkInFullDayCell = document.createElement("td");
            walkInFullDayCell.textContent = walkInData.FullDay;
            walkInFullDayCell.classList.add("fullDay-walkIn");
            tableRow.appendChild(walkInFullDayCell);

            tableBody.appendChild(tableRow);
        }
    });
}

scootsPricingData(pricingData);
