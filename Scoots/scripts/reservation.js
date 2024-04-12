
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
                element.style.backgroundColor = "black";

            })

            document.querySelectorAll("h2").forEach(element => {

                element.style.color = "white";

            })

            document.querySelector("button").style.color = "white";
            document.querySelector("button").style.backgroundColor = "black";

            document.querySelector("header").style.backgroundColor = "black";
            document.querySelector("header").style.color = "white";

            document.querySelector("footer").style.backgroundColor = "black";
            document.querySelector("footer").style.color = "white";

            document.querySelector(".nav").style.backgroundColor = "black";
            document.querySelector(".nav").style.color = "white";



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

            document.querySelector(".nav").style.backgroundColor = "whitesmoke";
            document.querySelector(".nav").style.color = "black";


            document.querySelectorAll(".navMode").forEach(element => {

                element.style.color = "black";
                element.style.backgroundColor = "whitesmoke";

            })

            document.querySelectorAll("h2").forEach(element => {

                element.style.color = "blue";

            })

            document.querySelector("button").style.color = "blue";
            document.querySelector("button").style.backgroundColor = "whitesmoke";

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



function displayweatherNow(data) {
    const tempNowData = data.main.temp;
    const humidNowData = data.main.humidity;
    const descriptionNow = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    tempNow.textContent = tempNowData;
    weatherNowDesc.textContent = descriptionNow;
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