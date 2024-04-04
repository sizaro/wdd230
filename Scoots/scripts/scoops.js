
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
    }

    if (darkMode.classList.contains("dark-mode")) {
        darkModeButton.textContent = "🌙";
    }

    darkModeButton.addEventListener("click", () => {
        darkMode.classList.toggle("dark-mode");

        if (darkMode.classList.contains("dark-mode")) {
            document.querySelector("#mode").style.backgroundColor = "white"
            document.querySelector(".reserve").style.backgroundColor = "black";
            document.querySelectorAll("section").forEach(section => {
                section.style.backgroundColor = "black";
                section.style.color = "white";
            }
            )

            document.querySelector("body").style.backgroundColor = "black";
            document.querySelector("body").style.color = "white";

            document.querySelectorAll(".navMode").forEach(element => {
                element.style.backgroundColor = "black";
                element.style.color = "white";

            })

            document.querySelector("#reserve").style.backgroundColor = "black";
            document.querySelector("#reserve").style.color = "white"

            document.querySelector(".rentalTypes").style.backgroundColor = "black";
            document.querySelector(".rentalTypes").style.color = "white";

            document.querySelector(".images").style.backgroundColor = "black";
            document.querySelector(".images").style.color = "white";

            document.querySelector("header").style.backgroundColor = "black";
            document.querySelector("header").style.color = "white";

            document.querySelector("footer").style.backgroundColor = "black";
            document.querySelector("footer").style.color = "white";

            document.querySelector(".nav").style.backgroundColor = "black";
            document.querySelector(".nav").style.color = "white";

            document.querySelector(".weatherInformation").style.backgroundColor = "black";
            document.querySelector(".weatherInformation").style.color = "white";


            darkModeButton.textContent = "🌙";
            darkModeButton.style.backgroundColor = "black";
        }
        else {
            darkModeButton.style.setProperty('--before-content-mode', '');
            document.querySelector(".reserve").style.backgroundColor = "#3f84c0";
            document.querySelectorAll("section").forEach(section => {
                section.style.backgroundColor = "#3f84c0";
                section.style.color = "white";
            }
            )

            document.querySelector("#reserve").style.backgroundColor = "white";
            document.querySelector("#reserve").style.color = "black";

            document.querySelector("body").style.backgroundColor = "white";
            document.querySelector("body").style.color = "black";

            document.querySelector(".rentalTypes").style.backgroundColor = "greenyellow";
            document.querySelector(".rentalTypes").style.color = "black";

            document.querySelector(".images").style.backgroundColor = "aquamarine";
            document.querySelector(".images").style.color = "black";

            document.querySelector("header").style.backgroundColor = "white";
            document.querySelector("header").style.color = "black";

            document.querySelector("footer").style.backgroundColor = "white";
            document.querySelector("footer").style.color = "black";

            document.querySelector(".nav").style.backgroundColor = "white";
            document.querySelector(".nav").style.color = "black";

            document.querySelector(".weatherInformation").style.backgroundColor = "white";
            document.querySelector(".weatherInformation").style.color = "black";

            document.querySelectorAll(".navMode").forEach(element => {
                element.style.backgroundColor = "white";
                element.style.color = "black";

            })

            darkModeButton.textContent = "🌞";
            darkModeButton.style.backgroundColor = "white";

        }

    })

})/*
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=0.4475271339059875&lon=33.20316576377895&appid=1b38869f1c347522d45b8c33cd852ef5";
let weatherForecast = document.querySelector(".weatherForecast");
let tempNow = document.querySelector("#currentTempValue");
let weatherNowDesc = document.querySelector("#weatherDescription");
let imageicon = document.createElement("img");
weatherForecast.appendChild(imageicon);

async function apiweatherFetch(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        displayweatherNow(data);
    }
}


function displayweatherNow(data) {
    const tempNowValue = data.main.temp;
    const descriptionNow = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconid = `https://openweathermap.org/img/w/${iconCode}.png`;
    tempNow.textContent = tempNowValue;
    weatherNowDesc.textContent = descriptionNow;
    imageicon.src = iconid;

}

apiweatherFetch(weatherUrl);*/