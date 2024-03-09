console.log("script loaded");
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
        portrait.scr = info.imageUrl;
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
