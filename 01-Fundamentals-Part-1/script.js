let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!')
console.log(10 + 20 + 30 + 40);

console.log("Jonas");
console.log(23);

let firstName = "Andrew";
let first = "JJ";
let firstNamePerson;

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let first_name = "JD";
let $function = 27;

let person = "Andrew";
let PI = 3.1415;

let myFirstJob = "Programer";
let mySecondJob = "Writer";

let job1 = 'Programer';
let job2 = 'Writer';

console.log(myFirstJob);


// data type
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 10);
console.log(typeof 'Andrew');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(typeof year);

console.log(typeof null);

// let, const, var

// let to define a variable that values can change later
let age = 30;
age = 31;

// const to define a variable that not supported to change 
const birthYear = 1995;
// birthYear = 2000;
// const job;


// let vs var: block scode vs function scope ???
// never use var
var job = 'programer';
job = 'writer';
console.log(job);

// Basic Operator

// Math operator
const now = 2030;
const myAge = now - 1995;
const ageAdrew = now - 1991;
console.log(myAge, ageAdrew);

console.log(myAge * 2, myAge / 2, 2 ** 3);

const fName = "Dan";
const lName = "Tae";
console.log(fName + " " + lName);

// Asignment operator
let x = 10 + 5; // 15
x += 10;        // x = x + 10 = 25
x *= 4;         // x = x * 4 = 100
x++;            // x = x + 1 = 101
x--;
x--;         
console.log(x);

// Comparison operator
console.log(5 > 4);
console.log(myAge > ageAdrew);
console.log(myAge >= 18);

let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

const averageAge = (myAge + ageAdrew) / 2;
console.log(averageAge);

// String literals
const myName = "Phuong";
const myBirthYear = 1995;
const myJob = "Developer";
const currentYear = 2019;

const myIntro = "I'm " + myName + ", a " + (currentYear - myBirthYear) + " years old " + myJob + "!";
console.log(myIntro);

const newInto = `I'm ${myName}, a ${currentYear - myBirthYear} years old ${myJob}`;
console.log(myIntro);

console.log(`Just a regular string!`);
console.log("String with \n\
mutiple \n\
line");
console.log(`String with
multiple
line`);

// Taking decision: if-else statements
const ageSarah = 15;
const isOldEnough = ageSarah >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗 ');
} else {
    const yearLeft = 18 - ageSarah;
    console.log(`Sarah is too young. Wait another ${yearLeft} years 👦`);
}

const birthyear = 1991;
let century;
if (birthyear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// Type Conversion and Coercion
const inputYear = '1995';
console.log(inputYear + 10);
console.log(Number(inputYear) + 10);

console.log(Number('andrew'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I'm " + 23 + " years old") // auto convert number to string
console.log('23' - '10' - '3');
console.log('23' * '2');

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}
 let score;
 if (score) {
    console.log("Score is define");
 } else {
    console.log("Score is undefined");
 }

 // Equality operator
const num = '18';
if (num === 18)
    console.log('Strict equality');

if (num == 18)
    console.log('Loose equality');

const favourite = prompt("What's favourite number?");
console.log(favourite);
console.log(typeof favourite);
if (favourite === 10) {  //'10' == 10
    console.log('Cool! That is an amazing number');
}

// Boolean logic
// 1. AND operator: true when all are true
// 2. OR operator: true when one is true
// 3. NOT operator: Inverts true/false value
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive.')
// }
const isTired  = false;
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive');
}

// switch statement
const day = 'friday';
switch (day) {  
    case 'monday':      // day === 'monday'
        console.log('Go to shool');
        break;
    case 'tuesday':
        console.log('Learn JavaScript');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Learn html/css');
        break;
    case 'friday':
        console.log('Learn database');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!');
        break;
    default:
        console.log('Not a valid day');
        break;
}

if (day === 'monday') {
    console.log('Go to school');
} else if (day === 'tuesday') {
    console.log('Learn JavaScript');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("Learn html/css");
} else if (day === 'friday') {
    console.log('Learn database');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend')
} else {
    console.log('Not a valid day')
}

age = 20;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
