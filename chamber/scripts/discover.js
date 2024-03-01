
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

let visitDisplay = document.querySelector(".pageVisits");

let lastVisit = localStorage.getItem("lastVisit");

let currentDate = new Date();

let timeDifference = currentDate.getTime() - lastVisit;

let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

localStorage.setItem("lastVisit", currentDate.getTime());

if (lastVisit === 0) {
    visitDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else if (daysDifference === 0) {
    visitDisplay.textContent = "Back so soon! Awesome!";
} else {
    visitDisplay.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
}

