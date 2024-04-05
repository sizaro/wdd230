
let lastUpdated = document.getElementById("lastUpdated");
lastUpdated.innerHTML = `Last Modified ${(document.lastModified)}`;
let currentYear = document.getElementById("currentYear");
currentYear.textContent = "2024";

let tempInput = document.querySelector("#tempValue");
let speedInput = document.querySelector("#speedValue");
let windchill = document.querySelector("#windchill");

function calculateWindChill(temp, speed) {
    if (temp <= 50 && speed > 3.0) {
        let windchillResults = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        return windchillResults.toFixed(2);
    } else {
        return "N/A";
    }
}

function updateWindChill() {
    let tempValue = parseFloat(tempInput.value);
    let speedValue = parseFloat(speedInput.value);

    windchill.textContent = calculateWindChill(tempValue, speedValue);
}

tempInput.addEventListener('input', updateWindChill);
speedInput.addEventListener('input', updateWindChill);

updateWindChill();

document.addEventListener("DOMContentLoaded", function () {
    let humburgerNav = document.querySelector("nav");
    humburgerNav.classList.add("humburger")
    let humburgerButton = document.querySelector("#humburger");
    if (humburgerNav.classList.contains("humburger")) {
        humburgerButton.textContent = "☰";
        humburgerButton.textContent.style.color= "black"
    }
    if (humburgerNav.classList.contains("show")) {
        humburgerButton.textContent = "×";
    }
    humburgerButton.addEventListener("click", () => {
        if (humburgerNav.classList.contains("humburger")) {
            humburgerNav.classList.remove("humburger");
            humburgerNav.classList.add("show");
            humburgerButton.textContent = "×";
        }

        else {
            humburgerNav.classList.add("humburger");
            humburgerNav.classList.remove("show");
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

            document.querySelectorAll(".mode-weather").forEach(element => {
                element.style.backgroundColor = "black";
                element.style.color = "white";
            })

            document.querySelector("#mode").style.backgroundColor = "white"
            document.querySelector(".joinButton").style.backgroundColor = "black";
            document.querySelectorAll("section").forEach(section => {
                section.style.backgroundColor = "black";
                section.style.color = "white";
            }
            )
            document.querySelector(".forecastedWeather").style.backgroundColor = "black";
            document.querySelector(".forecastedWeather").style.color = "white";

            document.querySelector(".daycontainer").style.backgroundColor = "black";
            document.querySelector(".daycontainer").style.color = "white";

            document.querySelector("header").style.backgroundColor = "black";
            document.querySelector("header").style.color = "white";

            document.querySelector(".nav").style.backgroundColor = "black";
            document.querySelector(".nav").style.color = "white";


            darkModeButton.textContent = "🌙";
            darkModeButton.style.backgroundColor = "black";
        }
        else {
            document.querySelectorAll(".mode-weather").forEach(element => {
                element.style.backgroundColor = "#3f84c0";
                element.style.color = "white";
            })

            darkModeButton.style.setProperty('--before-content-mode', '');
            document.querySelector(".joinButton").style.backgroundColor = "#3f84c0";
            document.querySelectorAll("section").forEach(section => {
                section.style.backgroundColor = "#3f84c0";
                section.style.color = "white";
            }
            )
            document.querySelector(".forecastedWeather").style.backgroundColor = "#3f84c0";
            document.querySelector(".forecastedWeather").style.color = "white";

            document.querySelector(".daycontainer").style.backgroundColor = "#3f84c0";
            document.querySelector(".daycontainer").style.color = "white";

            document.querySelector("header").style.backgroundColor = "#3f84c0";
            document.querySelector("header").style.color = "white";

            document.querySelector(".nav").style.backgroundColor = "rgba(100, 211, 255, 0.2)";
            document.querySelector(".nav").style.color = "white";

            darkModeButton.textContent = "🌞";
            darkModeButton.style.backgroundColor = "black";

        }

    })

})
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

apiweatherFetch(weatherUrl);

const weatherForecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=0.4475271339059875&lon=33.20316576377895&appid=1b38869f1c347522d45b8c33cd852ef5";
async function forecastApiweatherFetch(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        displayweatherForecast(data);
    }
}
function displayweatherForecast(data) {
    let currentDate = "";
    let daycontainer = document.querySelector(".daycontainer");

    data.list.forEach(weather => {
        let dateTime = new Date(weather.dt * 1000);
        let date = dateTime.toDateString();
        let hours = dateTime.getHours();
        let minutes = dateTime.getMinutes();

        if (date !== currentDate) {
            let newDayDiv = document.createElement("div");
            let newDayhead = document.createElement('h2');
            let weatherparaTime = document.createElement('p');
            let weatherparaTemp = document.createElement('p');
            let weatherparaDesc = document.createElement('p');
            let weatherparaImg = document.createElement('img');
            newDayDiv.classList.add("mode-weather");
            /*weatherparaTime.classList.add("mode-weather");
            weatherparaTemp.classList.add("mode-weather");
            weatherparaDesc.classList.add("mode-weather");*/
            let forecastIconCode = weather.weather[0].icon;
            weatherparaTime.textContent = `Time: ${hours}:${minutes}`;
            weatherparaTemp.textContent = `Temperature: ${weather.main.temp}`;
            weatherparaDesc.textContent = ` Description: ${weather.weather[0].description}`;
            weatherparaImg.src = `https://openweathermap.org/img/w/${forecastIconCode}.png`;

            newDayhead.textContent = date;
            newDayDiv.appendChild(newDayhead);
            daycontainer.appendChild(newDayDiv);
            newDayDiv.appendChild(weatherparaTime);
            newDayDiv.appendChild(weatherparaTemp);
            newDayDiv.appendChild(weatherparaDesc);
            newDayDiv.appendChild(weatherparaImg);

            currentDate = date;
        }
    })
}
/*
        let newDayDiv = document.createElement("div");
        
 
        
 
       
    });*/




forecastApiweatherFetch(weatherForecastUrl);