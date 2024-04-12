
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

            let rentalData = document.createElement("td");
            rentalData.textContent = rentalType;
            rentalData.classList.add("rental-type");
            tableRow.appendChild(rentalData);

            let maxPersonsData = document.createElement("td");
            maxPersonsData.textContent = reservationElement.MaxPersons;
            maxPersonsData.classList.add("max-persons");
            tableRow.appendChild(maxPersonsData);

            let reservationHalfDayData = document.createElement("td");
            reservationHalfDayData.textContent = reservationElement.HalfDay;
            reservationHalfDayData.classList.add("halfDay-reservation");
            tableRow.appendChild(reservationHalfDayData);

            let reservationFullDayData = document.createElement("td");
            reservationFullDayData.textContent = reservationElement.FullDay;
            reservationFullDayData.classList.add("halfDay-reservation");
            tableRow.appendChild(reservationFullDayData);

            let walkInHalfDayData = document.createElement("td");
            walkInHalfDayData.textContent = walkInData.HalfDay;
            walkInHalfDayData.classList.add("halfDay-walkIn");
            tableRow.appendChild(walkInHalfDayData);

            let walkInFullDayData = document.createElement("td");
            walkInFullDayData.textContent = walkInData.FullDay;
            walkInFullDayData.classList.add("fullDay-walkIn");
            tableRow.appendChild(walkInFullDayData);

            tableBody.appendChild(tableRow);
        }
    });
}

scootsPricingData(pricingData);


let lastUpdated = document.getElementById("lastUpdated");
lastUpdated.innerHTML = `Last Modified ${(document.lastModified)}`;
let currentYear = document.getElementById("currentYear");
currentYear.textContent = "2024";


document.addEventListener("DOMContentLoaded", function () {
    let logo = document.querySelector("#logoimg");
    let humburgerNav = document.querySelector("nav");
    humburgerNav.classList.add("humburger")
    let humburgerButton = document.querySelector("#humburger");
    if (humburgerNav.classList.contains("humburger")) {
        humburgerButton.textContent = "☰";
    }
    if (humburgerNav.classList.contains("show")) {
        humburgerButton.textContent = "×";
    }
    humburgerButton.addEventListener("click", () => {
        if (humburgerNav.classList.contains("humburger")) {
            humburgerNav.classList.remove("humburger");
            humburgerNav.classList.add("show");

            logo.classList.remove("logoshow");
            logo.classList.add("imagelogo");

            humburgerButton.textContent = "×";
        }

        else {
            humburgerNav.classList.add("humburger");
            humburgerNav.classList.remove("show");

            logo.classList.remove("imagelogo");
            logo.classList.add("logoshow");

            humburgerButton.textContent = "☰";
        }
    })
})

document.addEventListener("DOMContentLoaded", function () {
    let darkMode = document.querySelector("body");
    let darkModeButton = document.querySelector("#mode");

    if (darkModeButton) {
        darkModeButton.textContent = "🌞";
        darkModeButton.style.backgroundColor = "white";
    }

    if (darkMode.classList.contains("dark-mode")) {
        darkModeButton.textContent = "🌙";
        darkModeButton.style.backgroundColor = "white";
    }

    darkModeButton.addEventListener("click", () => {
        darkMode.classList.toggle("dark-mode");

        if (darkMode.classList.contains("dark-mode")) {
            document.querySelector("#mode").style.backgroundColor = "white"
            document.querySelector("body").style.backgroundColor = "black";
            document.querySelector("body").style.color = "white";

            document.querySelectorAll(".navMode").forEach(element => {

                element.style.color = "white";

            })

            document.querySelector("header").style.backgroundColor = "black";
            document.querySelector("header").style.color = "white";

            document.querySelector("footer").style.backgroundColor = "black";
            document.querySelector("footer").style.color = "white";

            document.querySelector("#simple-form").style.backgroundColor = "black";
            document.querySelector("#simple-form").style.color = "white";


            document.querySelector("#contact-info").style.backgroundColor = "black";
            document.querySelector("#contact-info").style.color = "white";

            document.querySelector("h2").style.color = "white";

            document.querySelectorAll("h2").forEach(element => {

                element.style.color = "white";

            })

            document.querySelectorAll("h4").forEach(element => {

                element.style.color = "white";

            })


            document.querySelectorAll("h3").forEach(element => {

                element.style.color = "white";

            })

            darkModeButton.textContent = "🌙";
            darkModeButton.style.backgroundColor = "black";
        }
        else {
            darkModeButton.style.setProperty('--before-content-mode', '');
            document.querySelectorAll("section").forEach(section => {
                section.style.backgroundColor = "#3f84c0";
                section.style.color = "white";
            }
            )

            document.querySelector("body").style.backgroundColor = "whitesmoke";
            document.querySelector("body").style.color = "black";


            document.querySelector("header").style.backgroundColor = "whitesmoke";
            document.querySelector("header").style.color = "black";

            document.querySelector("footer").style.backgroundColor = "whitesmoke";
            document.querySelector("footer").style.color = "black";


            document.querySelectorAll(".navMode").forEach(element => {

                element.style.color = "black";

            })

            document.querySelector("#simple-form").style.backgroundColor = "whitesmoke";
            document.querySelector("#simple-form").style.color = "black";


            document.querySelector("#contact-info").style.backgroundColor = "whitesmoke";
            document.querySelector("#contact-info").style.color = "black";

            document.querySelectorAll("h2").forEach(element => {

                element.style.color = "blue";

            })

            document.querySelectorAll("h4").forEach(element => {

                element.style.color = "blue";

            })

            document.querySelectorAll("h3").forEach(element => {

                element.style.color = "blue";

            })

            darkModeButton.textContent = "🌞";
            darkModeButton.style.backgroundColor = "white";

        }

    })

})