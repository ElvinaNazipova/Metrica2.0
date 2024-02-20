//Задание 1. 
//Напишите функцию multiple(a, b), которая перемножает два числа между собой. Функция возвращает результат умножения.

console.log(multiple(1, 5));
function multiple(a, b) {
    return a * b;
}

//Задание 2 
//Напишите функцию buildDate(day, month, year), которая принимает на вход числами день недели, месяц и год. Функция возвращает дату строкой в формате dd/mm/yyyy.

 
const date = buildDate(20, 02, 2024)

console.log(date);

function buildDate(day, month, year) {
   return `${day.toString()}/${month.toString().padStart(2, '0')}/${year.toString()}`
}

//3
console.log(isAdult(21));
function isAdult(age) {
  
    return age > 18 || age == 18;
    
}

//4
