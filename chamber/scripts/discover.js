
console.log("Script loaded!");
let visitDisplay = document.querySelector(".pageVisits");

let lastVisit = localStorage.getItem("lastVisit");

let currentDate = new Date();

let timeDifference = currentDate.getTime() - lastVisit;

let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

localStorage.setItem("lastVisit", currentDate.getTime());

if (lastVisit === 0) {
    visitDisplay.textContent = "Welcome! Let us know if you have any questions.";
    document.querySelector(".pageVisit").style
} else if (daysDifference === 0) {
    visitDisplay.textContent = "Back so soon! Awesome!";
} else {
    visitDisplay.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
};

let lastUpdated = document.getElementById("lastModified");
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
            document.querySelector(".containerimages").style.backgroundColor = "black";
            document.querySelector(".containerimages").style.color = "white";

            document.querySelector("header").style.backgroundColor = "black";
            document.querySelector("header").style.color = "white";

            document.querySelector("footer").style.backgroundColor = "black";
            document.querySelector("footer").style.color = "white";

            document.querySelector(".nav").style.backgroundColor = "black";
            document.querySelector(".nav").style.color = "white";

            document.querySelector(".image-container").style.backgroundColor = "black";
            document.querySelector(".image-container").style.color = "white";

            document.querySelectorAll(".about-images").forEach(element => {
                element.style.backgroundColor = "black";
                element.style.color = "white";
            }

            )


            darkModeButton.textContent = "🌙";
            darkModeButton.style.backgroundColor = "black";
        }
        else {


            document.querySelector(".containerimages").style.backgroundColor = "#ebedef";
            document.querySelector(".containerimages").style.color = "white";

            document.querySelector("header").style.backgroundColor = "#3f84c0";
            document.querySelector("header").style.color = "white";

            document.querySelector("footer").style.backgroundColor = "black";
            document.querySelector("footer").style.color = "white";

            document.querySelector(".nav").style.backgroundColor = "rgba(100, 211, 255, 0.2)";
            document.querySelector(".nav").style.color = "white";

            document.querySelector(".image-container").style.backgroundColor = "#1d2012";
            document.querySelector(".image-container").style.color = "white";

            document.querySelectorAll(".about-images").forEach(element => {
                element.style.backgroundColor = "gray";
                element.style.color = "white";
            }

            )

            darkModeButton.textContent = "🌞";
            darkModeButton.style.backgroundColor = "black";

        }

    })
})

document.addEventListener("DOMContentLoaded", function () {
    let datefun = () => {
        console.log("Script is running!");
        let lastMod = document.getElementById("lastModified");
        lastMod.innerHTML = `Last Modification: ${(document.lastModified)}`;

        let currentYear = document.getElementById("currentYear");
        currentYear.textContent = "2024";
    };

    datefun();
})