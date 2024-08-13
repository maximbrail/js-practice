// PEREMENNAYA

// let a = 'Hai'
// alert(typeof(a));

// USLOVIYE

// if (5 < 4) {
//     console.log('Yees');
// } else {
//     console.log('No');
// }

// CYCLE

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// ALERT AND PROMPT

// let name = prompt("What's your name?")
// let age = prompt("How old are you?")
// let city = prompt("Where are you?")

// alert("Hello " + name  + " you're " + age + " years old " + "you live in city " +  city )

// alert(`Hello ${name}, you're ${age} years old, you live in ${city}`)

// FUNCTIONS

// const fn = (name, age, city) => {
//         alert(`Hello ${name}, you're ${age} years old, you live in ${city}`)
// }

// fn('Max', 14, 'Tashkent')

// OBJECTS

// let user = {
//     name: 'Max',
//     surname: 'Brailov',
//     age: 14,
//     city: 'Tashkent'
// }
// user.age = 52
// delete user.age

// console.log(user);

// TASKS

// task #1

// let a1 = +prompt("Введи первое число")
// let a2 = +prompt("Введи второе число")

// if (a1 > a2) {
//     alert("Первое число больше второго")
// } else if (a1 < a2){
//     alert("Первое число меньше второго")
// } else {
//     alert("Они равны")
// }

// task #2

// let num = +prompt("Введите число")

// if (num == 0) {
//     alert("Равно 0")
// } else if (num % 2 == 0) {
//     alert("Чётное")
// } else {
//     alert("Не чётное")
// }


// task #3

// MATH

let SecNum = Math.floor(Math.random() * 11)

alert(SecNum)
let guess = +prompt("Угадай число от 1 до 10")

if (guess == SecNum){
    alert("Ты угадал, но мне пофиг💀💀💀💀")
} else {
    alert("Не угадал! Думай лучше в след. раз😒")
}