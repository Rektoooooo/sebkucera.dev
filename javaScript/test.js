const age = prompt("Enter ur age")
const name = prompt("Enter ur name")
let canPlayWithLego = age > 3 && age < 99

console.log(age)
console.log(name)
console.log(canPlayWithLego)

const temperature = prompt("Enter temperature");
let temperatureInCelsius = (temperature - 32) * 5 / 9
console.log(temperatureInCelsius.toFixed(2))

const time = prompt("Enter time in seconds");

const day = 86400;
const hour = 3600;
const minute = 60;

let daysout = Math.floor(time / day);
let hoursout = Math.floor((time - daysout * day) / hour);
let minutesout = Math.floor((time - daysout * day - hoursout * hour) / minute);
let secondsout = time - daysout * day - hoursout * hour - minutesout * minute;

console.log(daysout + " Day's " + hoursout + " Hours " + minutesout + " Minutes " + secondsout + " Seconds ")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const userNumber = prompt("Enter number from 0-10");
const userInt = parseInt(userNumber)
const ranNum = getRandomInt(10)
let correctNUmberGuessed = userInt === ranNum
console.log(correctNUmberGuessed)

const enterAge = prompt("Enter ur age bozo")
const enterAdultAge = prompt("Enter an age that you become adult in ur country")
let allowedDrink = enterAdultAge <= enterAge
console.log(allowedDrink)

