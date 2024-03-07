const form = document.getElementById("form")


form.addEventListener("submit",c => {
    c.preventDefault()
    const data = new FormData(form)
    postJSON({content: `${data.get("text")}`}).then(r => window.location.replace("feed.html"));
})



async function postJSON(data) {
    try {
        const response = await fetch("https://wjs-api.vercel.app/api/x/posts", {
            method: "POST",
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

