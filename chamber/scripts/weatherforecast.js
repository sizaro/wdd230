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