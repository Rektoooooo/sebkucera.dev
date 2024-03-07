const form = document.getElementById("form")


addEventListener("load", (event) => {
    fetchData()
    fetchUser()
});

form.addEventListener("submit",c => {
    c.preventDefault()
    while (tweets.firstChild) {
        tweets.removeChild(tweets.firstChild);
    }
    const data = new FormData(form)
    fetchData(data.get("search"))
})

function search() {
    while (tweets.firstChild) {
        tweets.removeChild(tweets.firstChild);
    }
    const data = new FormData(form)
    fetchData(data.get("search"))
}

function fetchData(search) {
    const url = new URL("https://wjs-api.vercel.app/api/x/posts")
    url.searchParams.set("search", search || "");
    fetch(url, {
        headers: new Headers({
            "Authorization": "Custom Khx6QxGSGD"
        })
    }).then(r => r.json())
        .then(data => renderData(data))
}

const tweets = document.getElementById("tweets")

function renderData(data) {
    console.log(data)
    for (let fetch of data.data) {
        const div = document.createElement('div')
        tweets.appendChild(div)
        div.classList.add("tweet")


        const name = document.createElement('h2')
        name.innerText = fetch.author.fullName
        div.appendChild(name)

        const content = document.createElement('h3')
        content.innerText = fetch.post.content
        div.appendChild(content)

        if (fetch.author.id === "ca6481fc-6a2e-446f-b063-a383379a8f99") {
            const edit = document.createElement('a')
            edit.innerText = "edit"
            edit.href = "editTweet.html"
            div.appendChild(edit)
        }

        const time = document.createElement('p')
        time.innerText = fetch.post.createdAt
        div.appendChild(time)

        const like = document.createElement('button')
        like.innerText = fetch.likeCount
        if (fetch.likeStatus) {
            like.classList.toggle("text-green-500")
        } else {
            like.classList.toggle("text-white")
        }
        like.addEventListener('click',function () {
            toggleLike(like,fetch.post.id,fetch.likeStatus).then(r =>
                window.location.replace("feed.html")
            )
        })
        div.appendChild(like)

    }
}

function toggleLike(x,id,status) {
    if (status) {
        return dislike(id)
    } else {
        return like(id)
    }
}

function like(id) {
    const url = new URL(`https://wjs-api.vercel.app/api/x/posts/${id}/like`)
    return fetch(url, {
        method: "PATCH",
        headers: new Headers({
            "Authorization": "Custom Khx6QxGSGD"
        })
    }).then(r => r.json())
        .then(data => renderLikes(data))
}

function dislike(id) {
    const url = new URL(`https://wjs-api.vercel.app/api/x/posts/${id}/dislike`)
    return fetch(url, {
        method: "PATCH",
        headers: new Headers({
            "Authorization": "Custom Khx6QxGSGD"
        })
    }).then(r => r.json())
        .then(data => renderLikes(data))
}

function renderLikes(data) {

}


const username = document.getElementById('user')

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
        username.innerText = data.data.fullName
}

