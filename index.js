//1
console.log(multiple(5, 7));
function multiple (a, b) {
    return a*b;
}

//2
console.log(buildDate(23,2,2024));
function buildDate(day,month,year) {
    return `${day}/${month.toString().padStart(2, '0')}/${year}`
}

//3
console.log(isAdult(21));
function isAdult(age) {
    return age >=18;
}

//4
console.log(getMonthByNumber(10));
function getMonthByNumber(monthNunmer) {
    switch (monthNunmer) {
        case 1:
        return "Январь"
         case 2:
        return"Февраль"
        case 3 :
        return "Март"
        case 4 :
        return "Апрель"
        case 5 :
        return "Май"
        case 6 :
        return "Июнь"
        case 7 :
        return "Июль"
        case 8 :
        return "Август"
        case 9 :
        return "Сентябрь"
        case 10 :
        return "Октябрь"   
        case 11 :
        return "Ноябрь "
        case 12 :
        return "Декабрь"
           
        default:
            return 'Некооректный номер месяца'
    }
}

//5
console.log(convertRub(1000, "USD"));
function convertRub(valueRub, currency) {
   switch (currency) {
    case "USD":
        return valueRub/92.75;
    case "EUR":
        return valueRub/100.44;
   case "AED":
    return valueRub/25.25;
    case "KZT":
        return valueRub/20.57;
    default:
        return "Неизвестная валюта"
   } 
}