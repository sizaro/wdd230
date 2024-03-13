const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.74910228261849&lon=6.639794840803155&appid=a8e333ed4192014e741ddc0221962a26&units=imperial";

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            data = await response.json();
            displayResults(data)

        }
        else {
            throw Error(await response.text());
        }

    }
    catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    weatherIcon.setAttribute("src", iconUrl);
    weatherIcon.setAttribute("alt", data.weather[0].description);

    const description = data.weather[0].description;
    captionDesc.textContent = description;
}


apiFetch(url);

