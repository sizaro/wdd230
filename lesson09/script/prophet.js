console.log("Script loaded!");
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayProphets(data.prophets);
    }
}


function displayProphets(prophets) {
    prophets.forEach(prophet => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        portrait.src = prophet.imageurl;
        portrait.alt = `${prophet.name} ${prophet.lastname}`
        portrait.loading = "lazy";
        portrait.width = "300";
        portrait.height = "400"
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        card.appendChild(fullName);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

getProphetData(url);

