let cn = new URL(window.location.href)


addEventListener("load", (event) => {
    fetchData()
    fetchUser()
});
const tweets = document.getElementById("tweets")

    function fetchUser() {
        const url = new URL(`https://wjs-api.vercel.app/api/x/users/${cn.searchParams.get("id")}`)
        fetch(url, {
            headers: new Headers({
                "Authorization": "Custom Khx6QxGSGD"
            })
        }).then(r => r.json())
            .then(data => renderUsers(data))
        console.log('Fetched user')
    }

function renderUsers(data) {
    const username = document.getElementById("username")
    const desc = document.getElementById("desc")
    username.innerText = data.data.fullName
    desc.innerText = `${data.data.fullName}'s posts :`
}




console.log(cn.searchParams.get("id"))

function fetchData(search) {
    const url = new URL(`https://wjs-api.vercel.app/api/x/posts`)
    url.searchParams.set("userId", cn.searchParams.get("id"));
    fetch(url, {
        headers: new Headers({
            "Authorization": "Custom Khx6QxGSGD"
        })
    }).then(r => r.json())
        .then(data => renderData(data))
}


function renderData(data) {
    console.log(data)
    for (let fetch of data.data) {
        const div = document.createElement('div')
        tweets.appendChild(div)
        div.classList.add("tweet")

        const name = document.createElement('a')
        name.innerText = fetch.author.fullName
        name.href = `users?id=${fetch.author.id}`
        div.appendChild(name)

        const content = document.createElement('h3')
        content.innerText = fetch.post.content
        div.appendChild(content)

        if (fetch.author.id === "ca6481fc-6a2e-446f-b063-a383379a8f99") {
            const edit = document.createElement('a')
            edit.innerText = "edit"
            edit.href = "editTweet.html"
            edit.classList.add("edit")
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
                window.location.replace(`users.html?id=${fetch.author.id}`)
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

