const list = document.getElementById("list");
const loading = document.getElementById("loading");
const noResults = document.getElementById("no-results");
const countEl = document.getElementById("count");

addEventListener("load", (event) => {
    const data = new FormData(form);
    fetchData(data.get("search"));
});

addEventListener("submit", (c) => {
    c.preventDefault();
    list.replaceChildren();
    noResults.classList.add("hidden");
    const data = new FormData(form);
    fetchData(data.get("search"));
});

function fetchData(search) {
    loading.classList.remove("hidden");
    list.classList.add("hidden");
    countEl.textContent = "";

    const url = new URL("https://rickandmortyapi.com/api/character");
    url.searchParams.set("name", search || "");

    fetch(url, {
        headers: new Headers({})
    })
    .then(r => r.json())
    .then(data => {
        loading.classList.add("hidden");
        list.classList.remove("hidden");

        if (data.results && data.results.length > 0) {
            countEl.textContent = `${data.results.length} found`;
            renderData(data);
        } else {
            noResults.classList.remove("hidden");
        }
    })
    .catch(error => {
        loading.classList.add("hidden");
        list.classList.remove("hidden");
        noResults.classList.remove("hidden");
        console.error("Error fetching data:", error);
    });
}

function renderData(data) {
    data.results.forEach((character, index) => {
        // Create card container
        const card = document.createElement("a");
        card.href = `detail.html?id=${character.id}`;
        card.className = "character-card";
        card.style.animationDelay = `${index * 0.05}s`;

        // Corner decorations
        const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
        corners.forEach(corner => {
            const cornerDiv = document.createElement("div");
            cornerDiv.className = `card-corner ${corner}`;
            card.appendChild(cornerDiv);
        });

        // Image container
        const imageContainer = document.createElement("div");
        imageContainer.className = "card-image-container";

        const img = document.createElement("img");
        img.src = character.image;
        img.alt = character.name;
        img.className = "card-image";
        img.loading = "lazy";
        imageContainer.appendChild(img);

        // Status indicator
        const statusIndicator = document.createElement("div");
        statusIndicator.className = "status-indicator";

        const statusDot = document.createElement("span");
        const statusClass = character.status.toLowerCase();
        statusDot.className = `status-dot ${statusClass}`;
        statusIndicator.appendChild(statusDot);

        const statusText = document.createElement("span");
        statusText.textContent = character.status;
        statusIndicator.appendChild(statusText);

        imageContainer.appendChild(statusIndicator);
        card.appendChild(imageContainer);

        // Card info
        const cardInfo = document.createElement("div");
        cardInfo.className = "card-info";

        const cardId = document.createElement("div");
        cardId.className = "card-id";
        cardId.textContent = `ID: ${character.id.toString().padStart(3, '0')}`;
        cardInfo.appendChild(cardId);

        const name = document.createElement("h3");
        name.className = "card-name";
        name.textContent = character.name;
        cardInfo.appendChild(name);

        // Meta info
        const meta = document.createElement("div");
        meta.className = "card-meta";

        // Species
        const speciesItem = document.createElement("div");
        speciesItem.className = "meta-item";
        speciesItem.innerHTML = `
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>${character.species}</span>
        `;
        meta.appendChild(speciesItem);

        // Location
        const locationItem = document.createElement("div");
        locationItem.className = "meta-item";
        locationItem.innerHTML = `
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>${character.location.name}</span>
        `;
        meta.appendChild(locationItem);

        cardInfo.appendChild(meta);
        card.appendChild(cardInfo);

        list.appendChild(card);
    });
}
