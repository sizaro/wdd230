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
            document.querySelector("#mode").style.backgroundColor = "white"
            document.querySelector(".joinButton").style.backgroundColor = "black";
            document.querySelectorAll("section").forEach(section => {
                section.style.backgroundColor = "black";
                section.style.color = "white";
            }
            )
            darkModeButton.textContent = "🌙";
            darkModeButton.style.backgroundColor = "black";
        }
        else {
            darkModeButton.style.setProperty('--before-content-mode', '');
            document.querySelector(".joinButton").style.backgroundColor = "#3f84c0";
            document.querySelectorAll("section").forEach(section => {
                section.style.backgroundColor = "#3f84c0";
                section.style.color = "white";
            }
            )
            darkModeButton.textContent = "🌞";
            darkModeButton.style.backgroundColor = "white";

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
