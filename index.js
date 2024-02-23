//Задание 1. 
//Напишите функцию multiple(a, b), которая перемножает два числа между собой. Функция возвращает результат умножения.

console.log(multiple(1, 5));
function multiple(a, b) {
    return a * b;
}

//Задание 2 
//Напишите функцию buildDate(day, month, year), которая принимает на вход числами день недели, месяц и год. Функция возвращает дату строкой в формате dd/mm/yyyy.

 
const date = buildDate(20, 2, 2024)

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

console.log(getMonthByNumber(2));


function getMonthByNumber (monthNumber) {
    switch (monthNumber) {
        case 1:
            return 'Январь';
        case 2:
            return 'Февраль';
        case 3:
            return 'Март';
        case 4:
            return 'Апрель';
        case 5:
            return 'Май';
        case 6:
            return 'Июнь';
        case 7:
            return 'Июль';
        case 8:
            return 'Август';
        case 9:
            return 'Сентябрь';
        case 10:
            return 'Октябрь';
        case 11:
            return 'Ноябрь';
        case 12:
            return 'Декабрь';
        default:
            return 'Некорректный номер месяца';
    }
}

//5


 
console.log(convertRub(1000, 'AED'));

function convertRub(valueRub, currency) {
    switch (currency) {
        case 'USD':
            return valueRub / 93.06;
        case 'EUR':
            return valueRub / 100.73;
        case 'KZT':
            return valueRub / 0.21;
        case 'AED':
            return valueRub / 25.34;
    
        default:
            return 'Неизвестная валюта';
    } 
}