const todo = document.getElementById('todo')
const add = document.getElementById('add')
const form = document.getElementById('form')

form.addEventListener('submit', c => {
    c.preventDefault()
})
add.addEventListener("click", c => addToDo())
function addToDo() {
    const parentDiv = document.createElement('div')
    const text = document.createElement("h1")
    const removeButton = document.createElement('button')
    const input = document.getElementById('input')
    parentDiv.classList.add('item')
    removeButton.innerText = 'X'
    removeButton.classList.add('remove')
    removeButton.addEventListener("click", c => parentDiv.remove())
    text.innerText = input.value
    todo.appendChild(parentDiv)
    parentDiv.appendChild(text)
    parentDiv.appendChild(removeButton)
    input.value = ''
}
