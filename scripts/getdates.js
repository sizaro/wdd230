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


    /*const modeButton = document.querySelector("#mode");
    const darkBody = document.querySelector("body");
    const header = document.querySelector(".header");
    const footer = document.querySelector("#footer");
    const nav = document.querySelector(".nav");
    const cad = document.querySelector(".cad");
    const cad1 = document.querySelector(".cad1");*/

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
paraDisplay.style.textAlign = "center"
numberOfVisits++;
localStorage.setItem("visits-num", numberOfVisits);


if (numberOfVisits === 0) {
    paraDisplay.textContent = "This is your first visit";
}
else {
    paraDisplay.textContent = `Page visits: ${numberOfVisits}`;

}