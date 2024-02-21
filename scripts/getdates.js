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

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});


let visitsDisplay = document.querySelector(".card2");
let paraDisplay = document.createElement("p");
visitsDisplay.appendChild(paraDisplay);
let numberOfVisits = Number(localStorage.getItem("visits-num"));
paraDisplay.style.textAlign = "center"
numberOfVisits++;
localStorage.setItem("visits-num", numberOfVisits);


if (numberOfVisits !== 0) {
    paraDisplay.textContent = `Page visits: ${numberOfVisits}`;
}
else {
    paraDisplay.textContent = "This is your first visit";
}