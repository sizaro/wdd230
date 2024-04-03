
let lastUpdated = document.getElementById("lastUpdated");
lastUpdated.innerHTML = `Last Modified ${(document.lastModified)}`;
let currentYear = document.getElementById("currentYear");
currentYear.textContent = "2024";

document.addEventListener("DOMContentLoaded", function () {
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
            humburgerButton.textContent = "×";
        }

        else {
            humburgerNav.classList.add("humburger");
            humburgerNav.classList.remove("show");
            humburgerButton.textContent = "☰";
        }
    })
})


document.addEventListener("DOMContentLoaded", function () {
    let darkMode = document.querySelector("body");
    let darkModeButton = document.querySelector("#mode");

    if (darkModeButton) {
        darkModeButton.textContent = "🌞";
    }

    if (darkMode.classList.contains("dark-mode")) {
        darkModeButton.textContent = "🌙";
    }

    darkModeButton.addEventListener("click", () => {
        darkMode.classList.toggle("dark-mode");

        if (darkMode.classList.contains("dark-mode")) {

            document.querySelector("body").style.backgroundColor = "black";
            document.querySelector("body").style.color = "white";

            document.querySelector("header").style.backgroundColor = "black";
            document.querySelector("header").style.color = "white";

            document.querySelector("footer").style.backgroundColor = "black";
            document.querySelector("footer").style.color = "white";

            document.querySelector(".copy").style.color = "white";
            document.querySelector("#lastUpdated").style.color = "white";

            document.querySelector(".nav").style.backgroundColor = "black";
            document.querySelector(".nav").style.color = "white";




            darkModeButton.textContent = "🌙";
            darkModeButton.style.backgroundColor = "black";
        }
        else {

            document.querySelector("body").style.backgroundColor = "white";
            document.querySelector("body").style.color = "black";

            document.querySelector("header").style.backgroundColor = "#3f84c0";
            document.querySelector("header").style.color = "white";

            document.querySelector("footer").style.backgroundColor = "black";
            document.querySelector("footer").style.color = "white";

            document.querySelector(".copy").style.color = "white";
            document.querySelector("#lastUpdated").style.color = "white";

            document.querySelector(".nav").style.backgroundColor = "rgba(100, 211, 255, 0.2)";
            document.querySelector(".nav").style.color = "white";


            darkModeButton.textContent = "🌞";
            darkModeButton.style.backgroundColor = "black";

        }

    })
})




