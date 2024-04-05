const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
const ask = prompt('Enter number')
console.log(`${ask}. day of an week is ${daysOfWeek[ask - 1]}`)

const askName = prompt('Enter names')
let nameList = askName.split(',')
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
while (nameList.length !== 0) {
    let ran = randomNumber(0,nameList.length)
    const deleteName = confirm(`Wanna delete fela named ${nameList[ran]}`)
    if (deleteName) {
        console.log(`Deleted ${nameList[ran]}`)
        nameList.splice(ran,1)
    }
    console.log(nameList)
}

let grade
let weight
let listGrade = []
let vahaSoucet = 0

while (grade !== null) {
    grade = prompt('Enter grade')
    if (grade == null) {
        break
    }
    weight = prompt('Enter weight')
    if (weight == null) {
        break
    }
    vahaSoucet += parseInt(weight)
    listGrade.push(parseInt(grade) * parseInt(weight))
    console.log(listGrade)
}

const product = listGrade.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(product)
console.log(vahaSoucet)
console.log(product / vahaSoucet)
