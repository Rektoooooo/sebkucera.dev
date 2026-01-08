const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const detail = document.getElementById("detail");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

addEventListener("load", (event) => {
    if (!id) {
        showError();
        return;
    }
    fetchDataChara();
});

function showError() {
    loading.classList.add("hidden");
    error.classList.remove("hidden");
}

function fetchDataChara() {
    const url = new URL(`https://rickandmortyapi.com/api/character/${id}`);

    fetch(url, {
        headers: new Headers({})
    })
    .then(r => {
        if (!r.ok) throw new Error('Not found');
        return r.json();
    })
    .then(data => {
        loading.classList.add("hidden");
        detail.classList.remove("hidden");
        renderData(data);
        // Update page title
        document.title = `${data.name} - Rick & Morty Explorer`;
    })
    .catch(err => {
        console.error("Error fetching data:", err);
        showError();
    });
}

function renderData(data) {
    const statusClass = data.status.toLowerCase();

    detail.innerHTML = `
        <!-- Image Section -->
        <div class="image-section">
            <div class="image-frame">
                <div class="frame-corner top-left"></div>
                <div class="frame-corner top-right"></div>
                <div class="frame-corner bottom-left"></div>
                <div class="frame-corner bottom-right"></div>
                <img src="${data.image}" alt="${data.name}" class="character-image">
            </div>
            <div class="status-badge ${statusClass}">
                <span class="status-dot"></span>
                <span>${data.status}</span>
            </div>
        </div>

        <!-- Info Section -->
        <div class="info-section">
            <div class="character-id">Subject ID: ${data.id.toString().padStart(3, '0')}</div>
            <h1 class="character-name">${formatName(data.name)}</h1>

            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Species</span>
                    <span class="info-value">${data.species}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Gender</span>
                    <span class="info-value">${data.gender}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Origin</span>
                    <span class="info-value">${data.origin.name}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Location</span>
                    <span class="info-value">${data.location.name}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Episodes</span>
                    <span class="info-value">${data.episode.length} appearance${data.episode.length !== 1 ? 's' : ''}</span>
                </div>
            </div>

            <a href="index.html" class="back-button">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Back to Search
            </a>
        </div>
    `;
}

// Format name to highlight last word in green
function formatName(name) {
    const words = name.split(' ');
    if (words.length > 1) {
        const lastWord = words.pop();
        return `${words.join(' ')} <span>${lastWord}</span>`;
    }
    return `<span>${name}</span>`;
}
