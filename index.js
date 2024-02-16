const ticket = false //билет
const international = true//загранпаспорт
const visa = false//виза
const money = true//деньги
const emotionnot = false //нет эмоций 
const age = 21;


if (((visa && money) || ticket === international || !emotionnot) && (age>  18)) {
    console.log('Ты летишь в Швейцарию');
} else {
    console.log("Постарайтесь в следующий раз");
}


const weather = "sunny"
const time = "night"

if ("rain" === weather) {
    console.log("Еду на автобусе");
} else if (time === "morning") {
    console.log('Еду на велике');
}
else {
    console.log("Еду на машине");
}