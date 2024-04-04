const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id')



addEventListener("load", (event) => {
    fetchDataChara()
});


function fetchDataChara() {
    const url = new URL(`https://rickandmortyapi.com/api/character/${id}`)
    fetch(url, {
        headers: new Headers({
        })
    }).then(r => r.json())
        .then(data => renderData(data))
}

const detail = document.getElementById("detail")
function renderData(data) {
    console.log(data)
        const div = document.createElement("div")
        detail.appendChild(div)

        const name = document.createElement("p")
        name.innerText = data.name
        div.appendChild(name)

        const status = document.createElement("p")
        status.innerText = data.status
        div.appendChild(status)

        const species = document.createElement("p")
        species.innerText = data.species
        div.appendChild(species)


    const img = document.createElement("img")
        img.src = data.image
        img.width = 200
        div.appendChild(img)



}
