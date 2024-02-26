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

const humburgerIcon = document.querySelector("#humburger");
const menuIcon = document.querySelector(".menu");
humburgerIcon.addEventListener("click", () => {
    humburgerIcon.classList.toggle("show");
    menuIcon.classList.toggle("show");

})