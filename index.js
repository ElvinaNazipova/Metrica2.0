
const age = parseInt(prompt ('Введите свой возраст'))
console.log(parseInt(age));
if (isAdult(age)) {
    alert ("Вы можете посетить страницу")
} else {
    alert ('Вы не достигли возраста подходящего')
}

alert (`Ваш возвраст: ${age}`)

function isAdult(age) {
    return age > 18
}