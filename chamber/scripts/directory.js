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
getMemberData(membersUrl);
