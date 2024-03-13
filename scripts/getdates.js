console.log("Script loaded!");

document.addEventListener("DOMContentLoaded", function () {
    let datefun = () => {
        console.log("Script is running!");
        let lastMod = document.getElementById("lastModified");
        lastMod.innerHTML = `Last Modification: ${(document.lastModified)}`;

        let currentYear = document.getElementById("currentYear");
        currentYear.textContent = "2024";
    };

    datefun();
});

const humburgerIcon = document.querySelector("#humburger");
const menuIcon = document.querySelector(".menu");
humburgerIcon.addEventListener("click", () => {
    humburgerIcon.classList.toggle("show");
    menuIcon.classList.toggle("show");

})


document.addEventListener("DOMContentLoaded", () => {
    let modeButton = document.querySelector("#mode");
    let darkBody = document.querySelector("body");

    if (modeButton) {
        modeButton.textContent = "🔆";
    }

    if (darkBody.classList.contains("dark-theme")) {
        modeButton.textContent = "🌙";
    }

    modeButton.addEventListener("click", () => {
        darkBody.classList.toggle("dark-theme");

        if (darkBody.classList.contains("dark-theme")) {

            document.querySelector("header").style.backgroundColor = "black";
            document.querySelector("header").style.color = "white";
            document.querySelector("footer").style.backgroundColor = "black";
            document.querySelector("footer").style.color = "white";
            document.querySelector(".nav").style.backgroundColor = "black";
            document.querySelector(".nav").style.color = "white";
            document.querySelector(".cad").style.backgroundColor = "black";
            document.querySelector(".cad").style.color = "white";
            document.querySelector(".cad1").style.backgroundColor = "black";
            document.querySelector(".cad1").style.color = "white";
            document.querySelector("body").style.backgroundColor = "black";
            document.querySelector(".card2").style.color = "white";
            document.querySelector("body").style.backgroundColor = "black";

            modeButton.textContent = "🌙";
        }
        else {
            document.querySelector("header").style.backgroundColor = "#3f84c0";
            document.querySelector("header").style.color = "#000";
            document.querySelector("footer").style.backgroundColor = "#3f84c0";
            document.querySelector("footer").style.color = "white";
            document.querySelector(".nav").style.backgroundColor = "black"
            document.querySelector(".nav").style.color = "white";
            document.querySelector(".cad").style.backgroundColor = "#3f84c0";
            document.querySelector(".cad").style.color = "white";
            document.querySelector(".cad1").style.backgroundColor = "#3f84c0";
            document.querySelector(".cad1").style.color = "white";
            document.querySelector(".card2").style.color = "black";
            document.querySelector("body").style.backgroundColor = "white";
            modeButton.textContent = "🔆";

        }
    });

})


let visitsDisplay = document.querySelector(".card2");
let paraDisplay = document.createElement("p");
visitsDisplay.appendChild(paraDisplay);
let numberOfVisits = Number(localStorage.getItem("visits-num"));
paraDisplay.style.textAlign = "center";
numberOfVisits++;
localStorage.setItem("visits-num", numberOfVisits);


if (numberOfVisits === 0) {
    paraDisplay.textContent = "This is your first visit";
}
else {
    paraDisplay.textContent = `Page visits: ${numberOfVisits}`;

}
let weatherDisplay = document.querySelector(".card2");
let weatherIcon = document.createElement("img");
let weatherParagraph = document.createElement("p");
let weatherCaption = document.createElement("figcaption");
weatherDisplay.appendChild(weatherIcon)
weatherDisplay.appendChild(weatherParagraph);
weatherDisplay.appendChild(weatherCaption);
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
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    weatherIcon.setAttribute("src", iconUrl);
    weatherIcon.setAttribute("alt", data.weather[0].description);

    const description = data.weather[0].description;
    weatherParagraph.textContent = ` ${data.main.temp}& deg;F ${description} `;
    /*weatherCaption.textContent = description;*/
}


apiFetch(url);

