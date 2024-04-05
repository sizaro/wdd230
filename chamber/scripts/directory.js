console.log("script loaded");
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

            document.querySelector(".button").style.backgroundColor = "black";
            document.querySelector(".button").style.color = "white";

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

            document.querySelectorAll("section").forEach(section => {
                section.style.backgroundColor = "black";
                section.style.color = "white";
            }

            )

            document.querySelectorAll(".mode-directory").forEach(element => {
                element.style.backgroundColor = "black";
                element.style.color = "white";
            }

            )

            /*
            document.querySelectorAll("p").forEach(paraElement => {
                paraElement.style.color = "white";
            })
*/

            darkModeButton.textContent = "🌙";
            darkModeButton.style.backgroundColor = "black";
        }
        else {

            document.querySelector(".button").style.backgroundColor = "white";
            document.querySelector(".button").style.color = "black";

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


            document.querySelectorAll("section").forEach(section => {
                section.style.backgroundColor = "gainsboro";
                section.style.color = "black";
            }

            )

            /*document.querySelectorAll("p").forEach(paraElement => {
                paraElement.style.color = "black";
            })*/

            document.querySelectorAll(".mode-directory").forEach(element => {
                element.style.backgroundColor = "gainsboro";
                element.style.color = "black";
            }

            )

            darkModeButton.textContent = "🌞";
            darkModeButton.style.backgroundColor = "black";

        }

    })
})


const membersUrl = "members.json";

async function getMemberData(membersUrl) {
    const response = await fetch(membersUrl);
    if (response.ok) {
        const data = await response.json();
        display(data.data);
    }
}

function display(response) {
    response.forEach(info => {
        let card = document.querySelector("#cards");
        let section = document.createElement("section");
        let heading = document.createElement("h1");
        let portrait = document.createElement("img");
        let paragraph1 = document.createElement("p");
        let paragraph2 = document.createElement("p");
        let paragraph3 = document.createElement("p");
        let paragraph4 = document.createElement("p");
        heading.classList.add("mode-directory");
        paragraph1.classList.add("mode-directory");
        paragraph2.classList.add("mode-directory");
        paragraph3.classList.add("mode-directory");
        paragraph4.classList.add("mode-directory");
        section.appendChild(heading);
        section.appendChild(portrait);
        section.appendChild(paragraph1);
        section.appendChild(paragraph2);
        section.appendChild(paragraph3);
        section.appendChild(paragraph4);
        card.appendChild(section);
        heading.textContent = info.companyName;
        portrait.src = info.imageUrl;
        portrait.width = "100";
        portrait.height = "150";
        portrait.loading = "lazy";
        paragraph1.textContent = info.address;
        paragraph2.textContent = info.phoneNumber;
        paragraph3.textContent = info.specialization;
        paragraph4.textContent = info.membershipLevel.gold;
    });
}
getMemberData(membersUrl);
addEventListener("DOMContentLoaded", () => {
    toggleButton.classList.add("grid");
})
let gridStyle = document.querySelector("#grid");
let listStyle = document.querySelector("#list");
let toggleButton = document.querySelector("#cards");

gridStyle.addEventListener("click", () => {
    toggleButton.classList.add("grid");
    toggleButton.classList.remove("list");
})

listStyle.addEventListener("click", () => {
    toggleButton.classList.add("list");
    toggleButton.classList.remove("grid");
})
