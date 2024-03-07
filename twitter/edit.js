const user = document.getElementById('user')
const formEdit = document.getElementById('form')

addEventListener("load", (event) => {
    fetchUser()
});
function fetchUser() {
    const url = new URL("https://wjs-api.vercel.app/api/x/users/ca6481fc-6a2e-446f-b063-a383379a8f99")
    fetch(url, {
        headers: new Headers({
            "Authorization": "Custom Khx6QxGSGD"
        })
    }).then(r => r.json())
        .then(data => renderUsers(data))
    console.log('Fetched user')
}

function renderUsers(data) {
    user.innerText = data.data.fullName
}


formEdit.addEventListener("submit",c => {
    c.preventDefault()
    const data = new FormData(form)
    postJSON({fullName: `${data.get("name")}`}).then(r => window.location.replace("feed.html"));
})



async function postJSON(data) {
    try {
        const response = await fetch("https://wjs-api.vercel.app/api/x/users/ca6481fc-6a2e-446f-b063-a383379a8f99", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Custom Khx6QxGSGD"
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

