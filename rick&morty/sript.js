
addEventListener("load", (event) => {
    const data = new FormData(form)
    fetchData(data.get("search"))
});

addEventListener("submit", (c) => {
    c.preventDefault()
    list.replaceChildren()
    const data = new FormData(form)
    fetchData(data.get("search"))
});

function fetchData(search) {
    const url = new URL("https://rickandmortyapi.com/api/character")
    url.searchParams.set("name", search || "");
    fetch(url, {
        headers: new Headers({
        })
    }).then(r => r.json())
        .then(data => renderData(data))
}

const list = document.getElementById("list")

function renderData(data) {
    for (let i = 0; i < data.results.length; i++) {

        const div = document.createElement("div")
        list.appendChild(div)

        const name = document.createElement("a")
        name.innerText = data.results[i].name
        name.href = `detail.html?id=${data.results[i].id}`
        div.appendChild(name)

        const img = document.createElement("img")
        img.src = data.results[i].image
        img.width = 200
        div.appendChild(img)

    }

}
