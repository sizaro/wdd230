
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
            document.querySelector(".reserve").style.backgroundColor = "black";
            document.querySelectorAll("section").forEach(section => {
                section.style.backgroundColor = "black";
                section.style.color = "white";
            }
            )

            document.querySelector("body").style.backgroundColor = "black";
            document.querySelector("body").style.color = "white";

            document.querySelectorAll(".navMode").forEach(element => {

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

            document.querySelector("#weatherInformation").style.backgroundColor = "black";
            document.querySelector("#weatherInformation").style.color = "white";
            document.querySelector("#weatherInformation").style.marginBottom = "30";




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

            document.querySelector("#reserve").style.backgroundColor = "white";
            document.querySelector("#reserve").style.color = "black";

            document.querySelector("body").style.backgroundColor = "white";
            document.querySelector("body").style.color = "black";

            document.querySelector(".rentalTypes").style.backgroundColor = "whitesmoke";
            document.querySelector(".rentalTypes").style.color = "black";

            document.querySelector(".images").style.backgroundColor = "whitesmoke";
            document.querySelector(".images").style.color = "black";

            document.querySelector("header").style.backgroundColor = "white";
            document.querySelector("header").style.color = "black";

            document.querySelector("footer").style.backgroundColor = "white";
            document.querySelector("footer").style.color = "black";

            document.querySelector(".nav").style.backgroundColor = "white";
            document.querySelector(".nav").style.color = "black";

            document.querySelector("#weatherInformation").style.backgroundColor = "rgba(212, 100, 100, 0.1)";
            document.querySelector("#weatherInformation").style.color = "black";


            document.querySelectorAll(".navMode").forEach(element => {

                element.style.color = "black";

            })

            darkModeButton.textContent = "🌞";
            darkModeButton.style.backgroundColor = "white";

        }

    })

})


const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=0.4475271339059875&lon=33.20316576377895&appid=1b38869f1c347522d45b8c33cd852ef5";
let tempNow = document.querySelector(".current-temperature");
let humidNow = document.querySelector(".current-humidity");
let weatherNowDesc = document.querySelector(".description");

async function apiweatherFetch(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        displayweatherNow(data);
        maxTemp(data);
    }
}



function maxTemp(data) {
    let weatherBanner = document.querySelector("#weatherInformation");
    let bodyItem = document.querySelector("body")
    let weatherdata = data.main.temp_max;
    let weatherPara = document.createElement("p");
    let weatherButton = document.createElement("button");
    weatherPara.textContent = `The maximum temperature today is: ${weatherdata}°F`;
    weatherButton.textContent = `X`;
    weatherPara.classList.add("weather-para");
    weatherButton.classList.add("weather-button");
    weatherBanner.appendChild(weatherPara);
    weatherBanner.appendChild(weatherButton);
    weatherBanner.style.display = "flex";
    weatherBanner.style.justifyContent = "center";
    weatherBanner.style.alignItems = "center";
    weatherBanner.style.color = "black";

    weatherButton.addEventListener("click", () => {
        weatherBanner.style.display = "none";
    })
}


/*
function maxTemp(data) {
    addEventListener("DOMContentLoaded", () => {
        let weatherBanner = document.querySelector("#weatherInformation");
        let weatherdata = data.main.temp_max;
        let weatherPara = document.createElement("p");
        let weatherButton = document.createElement("button");
        weatherPara.textContent = weatherdata;
        weatherButton.textContent = `X`;
        weatherPara.classList.add("weather-para");
        weatherButton.classList.add("weather-button");
        weatherBanner.appendChild(weatherPara);
        weatherBanner.appendChild(weatherButton);
        weatherBanner.style.display = "flex";
        weatherBanner.style.color = "black";

        weatherButton.addEventListener("click", () => {
            weatherBanner.style.display = "none";
        })
    })
}*/

function displayweatherNow(data) {
    const tempNowData = data.main.temp;
    const humidNowData = data.main.humidity;
    const descriptionNow = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    /* const iconid = `https://openweathermap.org/img/w/${iconCode}.png`;*/
    tempNow.textContent = tempNowData;
    weatherNowDesc.textContent = descriptionNow;
    /* imageNow.src = iconid;*/
    humidNow.textContent = humidNowData;


}

document.addEventListener("DOMContentLoaded", () => {
    apiweatherFetch(weatherUrl);
})



const weatherForecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=0.4475271339059875&lon=33.20316576377895&appid=1b38869f1c347522d45b8c33cd852ef5";
async function forecastApiweatherFetch(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        displayweatherForecast(data);
    }
}

function displayweatherForecast(data) {
    let daycontainer = document.querySelector(".daycontainer");

    data.list.forEach(weather => {
        let dateTime = new Date(weather.dt * 1000);
        let localDateTime = dateTime.toLocaleString()
        let date = dateTime.toDateString();
        let dateToday = new Date();
        let today = dateToday.toDateString();
        let hours = new Date(localDateTime).getHours()

        if ((date !== today) && (hours == 14)) {

            let mainTemperature = document.querySelector('.main-temp');
            let mainDescription = document.querySelector('.description');
            let mainWeather = document.querySelector('.main-weather');
            let forecastHumidity = document.querySelector('.forecast-humidity');
            let imageNow = document.querySelector(".weather-icon");
            /*weatherparaTime.classList.add("mode-weather");
            weatherparaTemp.classList.add("mode-weather");
            weatherparaDesc.classList.add("mode-weather");*/
            let forecastIconCode = weather.weather[0].icon;
            mainTemperature.textContent = `Temperature: ${weather.main.temp}`;
            mainDescription.textContent = ` Description: ${weather.weather[0].description}`;
            mainWeather.textContent = `${weather.weather[0].main}`;
            forecastHumidity.textContent = `${weather.main.humidity}`;
            imageNow.src = `https://openweathermap.org/img/w/${forecastIconCode}.png`;

        }
    })
}


forecastApiweatherFetch(weatherForecastUrl);
/*
addEventListener("DOMContentLoaded", () => {

let dayDate = new Date();
let dayOfWeek = dayDate.getDay();
if (dayOfWeek == 0 || dayOfWeek == 6 || dayOfWeek == 1) {

let eventBanner = document.querySelector("#eventBanner");
eventBanner.style.display = "flex";
eventBanner.style.color = "black";
let eventPara = document.createElement("p");
let eventButton = document.createElement("button");
eventPara.textContent = "You are invited to Zion of Jinja chamber of commerce meet and greet on Wednesday at 7:00 p.m.";
eventButton.textContent = `X`;
eventPara.classList.add("event-para");
eventButton.classList.add("event-button");
eventBanner.appendChild(eventPara);
eventBanner.appendChild(eventButton);

eventButton.addEventListener("click", () => {
eventBanner.style.display = "none";
})

}

}) */
