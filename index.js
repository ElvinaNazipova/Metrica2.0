const person = {
    //Свойства объекта
    age: 21,
    name: 'Elvina',
    surname: "Nazipova",
    city: "Surgut",
    //Методы объекта
    getFullName: function () {
        return `${this.name} ${this.surname}`;
    },

    sayHi: function () {
        console.log(`Hello, my name is ${this.name}`);
    },

    isAdult: function () {
        return this.age >= 18;
    }
//До сюда методы
};
person.sayHi();


console.log(person.getFullName());

console.log(person.isAdult());


// const people =[
//     {
//     age: 21,
//     name: 'Elvina',
//     surname: "Nazipova",
//     city: "Surgut"
//     },
//     {
//     age: 22,
//     name: 'Rasd',
//     surname: "Poyt",
//     city: "Kipr"
//     }
// ]

// people.forEach(man => {
//     console.log(man.age);

// }

// )