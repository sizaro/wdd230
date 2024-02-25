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
const body = document.querySelector("#body");
const header = document.querySelector(".header");
const footer = document.querySelector("#footer");
const nav = document.querySelector(".nav");
const cad = document.querySelector(".cad");
const cad1 = document.querySelector(".cad1");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        body.style.background = "#000";
        body.style.color = "#fff";
        header.style.background = "#000";
        header.style.color = "#fff";
        footer.style.background = "#000";
        footer.style.color = "#fff";
        nav.style.background = "#000";
        nav.style.color = "#fff";
        cad.style.background = "#000";
        cad.style.color = "fff";
        cad1.style.background = "#000";
        cad1.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        body.style.background = "white";
        body.style.color = "black";
        header.style.background = "blue";
        header.style.color = "#white";
        footer.style.background = "blue";
        footer.style.color = "white";
        nav.style.background = "#eee";
        nav.style.color = "#000";
        cad.style.background = "blue";
        cad.style.color = "white";
        cad1.style.background = "blue";
        cad1.style.color = "white";
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


if (numberOfVisits !== 1) {
    paraDisplay.textContent = `Page visits: ${numberOfVisits}`;
}
else {
    paraDisplay.textContent = "This is your first visit";
}