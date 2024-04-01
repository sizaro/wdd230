const weatherForecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=0.4475271339059875&lon=33.20316576377895&appid=1b38869f1c347522d45b8c33cd852ef5";
async function forecastApiweatherFetch(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        displayweatherForecast(data)
    }
}
function displayweatherForecast(data) {
    data.list.forEach(weatherinfo => {
        let timeStamp = weatherinfo.dt;
        let date = new Date(timeStamp);
        let hour = date.getHours();
        let dayOfweek = date.getDay();
        if (hour == 15 && dayOfweek == 1) {
            const para1day = document.querySelector("#forecastTempValue1");
            const para2day = document.createElement("#forecastweatherDescription1");
            para1day.textContent = `The temp is ${weatherinfo.main.temp}`;
            para2day.textContent = `It is ${weatherinfo.weather[0].description}`;
            /*const forecastIconCode = weatherinfo.weather[0].icon;
            const forecastIconid = `https://openweathermap.org/img/w/${forecastIconCode}.png`
            forecastImage.src = forecastIconid;
            forecastImage.style.width = "100";
            forecastImage.style.height = "100";*/
        }

    });
}
forecastApiweatherFetch(weatherForecastUrl);

