console.log("script loaded");
const members = "data/members.json";
const cards = document.querySelector("#cards");

async function getMemberData(members) {
    const response = await fetch(members);
    if (response.ok) {
        const info = await response.json();
        display(info.data);
    }
}

function display(information) {
    information.forEach(info => {
        let card = document.querySelector("#cards");
        let section = document.createElement("section");
        let heading = document.createElement("h1");
        let image = document.createElement("img");
        let paragraph1 = document.createElement("p");
        let paragraph2 = document.createElement("p");
        let paragraph3 = document.createElement("p");
        let paragraph4 = document.createElement("p");
        section.appendChild(heading);
        section.appendChild(image);
        section.appendChild(paragraph1);
        section.appendChild(paragraph2);
        section.appendChild(paragraph3);
        section.appendChild(paragraph4);
        card.appendChild(section);
        heading.textContent = info.companyName
    });
}



display(members);